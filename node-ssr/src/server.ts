import express, { Request, Response, Application } from "express";
import path from "path";
import dotenv from "dotenv";

// 환경변수 로드
dotenv.config();

const app: Application = express();
const PORT = 8080;

// templates 폴더를 정적 파일로 서빙
app.use(express.static(path.join(__dirname, "../templates")));

// JSON 파싱 미들웨어
app.use(express.json());

// 기본 라우트
app.get("/", (_req: Request, res: Response): void => {
  res.send(
    `
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/styles/reset.css" />
    <link rel="stylesheet" href="/styles/main.css" />
    <link rel="stylesheet" href="/styles/thumbnail.css" />
    <title>영화 리뷰</title>
  </head>
  <body>
    <div id="wrap">
      <header>
        <div class="background-container">
          <div class="overlay" aria-hidden="true"></div>
          <div class="top-rated-container">
            <h1 class="logo">
              <img src="/images/logo.png" alt="MovieList" />
            </h1>
            <div class="top-rated-movie">
              <div class="rate">
                <img src="/images/star_empty.png" class="star" />
                <span class="rate-value">9.5</span>
              </div>
              <div class="title">인사이드 아웃2</div>
              <button class="primary detail">자세히 보기</button>
            </div>
          </div>
        </div>
      </header>
      <div class="container">
        <ul class="tab">
          <li>
            <a href="#">
              <div class="tab-item selected"><h3>상영 중</h3></div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="tab-item"><h3>인기순</h3></div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="tab-item"><h3>평점순</h3></div>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="tab-item"><h3>상영 예정</h3></div>
            </a>
          </li>
        </ul>
        <main>
          <section>
            <h2>지금 인기 있는 영화</h2>
            <ul class="thumbnail-list">
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
              <li>
                <div class="item">
                  <img
                    class="thumbnail"
                    src="https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg"
                    alt="인사이드 아웃 2"
                  />
                  <div class="item-desc">
                    <p class="rate">
                      <img src="/images/star_empty.png" class="star" /><span
                        >7.7</span
                      >
                    </p>
                    <strong>인사이드 아웃 2</strong>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </div>

      <footer class="footer">
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
        <p><img src="/images/woowacourse_logo.png" width="180" /></p>
      </footer>
    </div>
  </body>
</html>

<!--
  포스터 원본: https://image.tmdb.org/t/p/original//pmemGuhr450DK8GiTT44mgwWCP7.jpg
  포스터 썸네일: https://media.themoviedb.org/t/p/w440_and_h660_face/pmemGuhr450DK8GiTT44mgwWCP7.jpg
  배너 원본: https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/stKGOm8UyhuLPR9sZLjs5AkmncA.jpg
--> 
`
  );
});

// 서버 시작
app.listen(PORT, (): void => {
  console.log(`🌟 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});

export default app;
