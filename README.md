# Waffle HighSchool Server

> created by [@woohm402](https://github.com/woohm402)

과제 진행 중 사용하게 될 와플고등학교의 서버 repository 입니다.

---

# 기술 스택

| key        |                  value |
| :--------- | ---------------------: |
| Language   |             TypeScript |
| DB         |             postgresql |
| Framework  |                 NestJS |
| Formatter  |   eslint <br> prettier |
| Deployment | EC2 (t3.nano) <br> pm2 |

# API

- [DOC](https://p04fpgjlo3.execute-api.ap-northeast-2.amazonaws.com/swagger)
- base_url: `https://p04fpgjlo3.execute-api.ap-northeast-2.amazonaws.com/v1/`

# 비고

- 가드가 막 잘 설정되어 있지는 않습니다. 문서대로만 하시면 문제 없겠으나 문서를 따르지 않았을 때 `500` 등이 충분히 날 수 있습니다.

# CI / CD

- github actions
  - lint: `lint.yml`
  - build: `build.yml`-> 토큰 2021년 12월 2일 만료
