# README

# SchoolVerse

---

카테고리별로 학습게임을 제공하는 웹 유니티 플랫폼에 가상 멀티 공간을 구성하여 제공함으로서, 아이들이 학습게임으로 재밌게 학습능력을 기를 수 있게 도와 주는 메타버스 플랫폼입니다.

## 주요기능

---

- Unity의 Map 이동을 통한 기능 제공
- 4가지의 학습 게임 제공
- 랭킹 시스템

## 세부기능

---

- Unity의 Map 이동을 통한 기능 제공
    - WASD로 이동, 스페이스바로 점프
    - 각 칠판 앞에서 q를 누르면 게임으로 이동
- 4가지의 학습 게임 제공
    - Sliding Puzzle : 조각난 사진을 원래의 모습으로 맞추는 게임
    - Memory Game : 카드를 뒤집어서 같은 그림을 맞추는 게임
    - Dot Dot : 주어진 점들을 한 번에 다 잇는 게임
    - Sudoku : 각 행과 열과 3x3 구역이 1에서 9까지의 숫자 모두를 포함하도록 하는 논리 퍼즐 게임
- 랭킹 시스템
    - 웹에서 랭킹보기를 누르면 각 게임별 Top3의 점수 랭킹을 확인할 수 있음
    

## 아키텍쳐

---

이미지1

## 사용예시

---

1. 게임 접속시 맵의 모습
- 이미지2
1. 게임 맵에서 미로의 모습
- 이미지3
1. 게임 화면의 모습
- 이미지4
- 이미지5
- 이미지6
- 이미지7

## 설치 및 배포 설정

---

```
설치: sudo git clone <git 주소>
프론트 위치: S05P31D203/unity_WebGL/frontend
백엔드1 위치: S05P31D203/backend
백엔드2 위치: S05P31D203/backend_rank

프론트 실행: sudo systemctl start nginx
프론트 빌드 폴더 위치: /var/www/html

백엔드1 실행: java -jar school-bus-1.0-SNAPSHOT.jar
백엔드2 실행: java -jar unity-rank-1.0-SNAPSHOT.jar

페이지 접속: https://k5d203.p.ssafy.io/
```