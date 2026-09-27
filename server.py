#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
간단한 로컬 웹 서버
이맛식품 웹사이트를 로컬에서 테스트하기 위한 서버입니다.

실행 방법:
    python server.py
    
그 다음 브라우저에서 http://localhost:8000 을 열어주세요.
"""

import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

# 설정
PORT = 8000
DIRECTORY = Path(__file__).parent

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """커스텀 HTTP 요청 핸들러"""
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def end_headers(self):
        # CORS 헤더 추가 (개발 환경용)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def log_message(self, format, *args):
        """로그 메시지 포맷 커스터마이징"""
        print(f"[{self.log_date_time_string()}] {format % args}")

def main():
    """메인 함수"""
    print("=" * 60)
    print("🎨 이맛식품 웹사이트 - 로컬 개발 서버")
    print("=" * 60)
    print(f"📁 서버 디렉토리: {DIRECTORY}")
    print(f"🌐 서버 주소: http://localhost:{PORT}")
    print(f"📱 모바일 테스트: http://[컴퓨터IP]:{PORT}")
    print("=" * 60)
    print("\n서버를 시작합니다...")
    print("⚠️  종료하려면 Ctrl+C 를 누르세요.\n")
    
    # 서버 설정
    handler = CustomHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), handler) as httpd:
        try:
            # 브라우저 자동 열기
            url = f"http://localhost:{PORT}"
            print(f"✅ 서버 실행 중! 브라우저에서 {url} 을 열어주세요.\n")
            
            # 자동으로 브라우저 열기 (선택사항 - 주석 해제하여 사용)
            # webbrowser.open(url)
            
            # 서버 실행
            httpd.serve_forever()
            
        except KeyboardInterrupt:
            print("\n\n🛑 서버를 종료합니다...")
            print("✅ 서버가 정상적으로 종료되었습니다.")
            print("\n감사합니다! 👋\n")

if __name__ == "__main__":
    main()
