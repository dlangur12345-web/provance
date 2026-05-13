import { Button } from "@/components/ui/button";
import { Phone, Music, Sparkles, Users, Clock, Volume2 } from "lucide-react";

/**
 * 프로방스 가락동 노래방 - 홍보용 웹페이지
 * 디자인: 우아한 모던 럭셔리
 * 색상: 따뜻한 크림 + 어두운 슬레이트 + 골드 강조색 + 부드러운 라벤더
 * 타이포: Playfair Display (헤드라인) + Lora (서브) + Inter (바디)
 */

export default function Home() {
  const phoneNumber = "01096698266";
  const phoneLink = `tel:${phoneNumber}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile Floating Call Button */}
      <a
        href={phoneLink}
        className="fixed bottom-6 right-6 md:hidden z-40 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-200 active:scale-95"
        title="전화 예약"
      >
        <Phone className="w-6 h-6" />
      </a>
      {/* Mobile Floating Call Button - End */}

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <nav className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">
              [프로방스]
            </div>
            <span className="text-sm text-muted-foreground">가락동 노래방</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition-colors">
              특징
            </a>
            <a href="#rooms" className="text-sm hover:text-primary transition-colors">
              시설
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              연락처
            </a>
          </div>
          <a href={phoneLink}>
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">예약하기</span>
            </Button>
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden" aria-label="프로방스 가락동 노래방 메인 소개">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663657517864/WsuCmDHSo38pqtq8kLiHKC/hero-background-WvxYxNNvqbsbnUZmijamBY.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              프로방스
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
              가락동 최고의 프리미엄 노래방
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              럭셔리한 인테리어, 스튜디오급 음질, 그리고 특별한 경험이 당신을 기다리고 있습니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href={phoneLink}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto gap-2">
                  <Phone className="w-5 h-5" />
                  지금 예약하기
                </Button>
              </a>
              <a href="#rooms">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  시설 둘러보기
                </Button>
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24시</div>
                <p className="text-sm text-white/70">연중무휴 운영</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">12인</div>
                <p className="text-sm text-white/70">최대 수용</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <p className="text-sm text-white/70">고객만족도</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-secondary/30" aria-label="프로방스의 단단한 스타일 동영상">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">프로방스가 특별한 이유</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Feature 1 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Volume2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">스튜디오급 음질</h3>
                  <p className="text-muted-foreground">
                    프로급 튜닝을 거친 프리미엄 마이크와 고출력 앰프 시스템으로 압도적인 사운드를 제공합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Music className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">최신 신곡 매일 업데이트</h3>
                  <p className="text-muted-foreground">
                    매일 최신 차트 반영! 원하는 모든 장르의 곡을 누구보다 빠르게 즐기세요.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">럭셔리 & 쾌적한 인테리어</h3>
                  <p className="text-muted-foreground">
                    감각적인 무드라이트와 세련된 디자인. 첨단 공기질 관리 시스템으로 언제나 쾌적합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">회식·모임 최적화</h3>
                  <p className="text-muted-foreground">
                    소규모 데이트부터 최대 12인까지 수용 가능한 다양한 룸. 가락동 회식 장소로 강력 추천합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Gold Divider */}
          <div className="flex items-center justify-center gap-4 my-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary" />
            <Clock className="w-5 h-5 text-primary" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary" />
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              24시간 운영으로 언제든 편하게 방문하세요
            </p>
            <a href={phoneLink}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
                <Phone className="w-5 h-5" />
                지금 전화 예약하기
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-20 md:py-28" aria-label="프리미엄 노래방 단체들">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">프리미엄 시설</h2>
            <p className="text-lg text-muted-foreground">최고의 경험을 위해 설계된 다양한 테마의 룸</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Room 1 */}
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden h-80 md:h-96">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663657517864/WsuCmDHSo38pqtq8kLiHKC/premium-room-1-GUY7Re4GkERn9AV9VqvDeo.webp"
                  alt="스탠다드룸"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-semibold mb-2">스탠다드룸</h3>
                <p className="text-muted-foreground mb-4">최대 6인 | 친구, 연인과 함께 즐기기 좋은 아늑한 공간</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>010-9669-8266</span>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden h-80 md:h-96">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663657517864/WsuCmDHSo38pqtq8kLiHKC/premium-room-2-3mZbRpepQnwrvD4wwEQst9.webp"
                  alt="프리미엄 단체룸"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-semibold mb-2">프리미엄 단체룸</h3>
                <p className="text-muted-foreground mb-4">최대 12인 | 회식, 파티에 최적화된 넓은 공간</p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Phone className="w-4 h-4" />
                  <span>010-9669-8266</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 md:py-28 bg-secondary/20" aria-label="고객 만족도 및 후기">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">고객 후기</h2>
            <p className="text-lg text-muted-foreground">고객만족도 4.9점 ⭐</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <p className="text-lg mb-4 italic text-muted-foreground">
                "생일파티를 여기서 했는데 정말 최고였어요! 음질도 좋고 분위기가 정말 고급스러워서 친구들이 다 감동했습니다. 다음 달에 또 예약할 거예요."
              </p>
              <p className="font-semibold text-primary">— 김★지 고객님</p>
            </div>

            <div className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
              <p className="text-lg mb-4 italic text-muted-foreground">
                "출장 와서 동료들과 회식했는데 프로방스가 정말 특별했어요. 24시간 운영이라 늦은 시간에도 편하게 예약할 수 있고, 서비스도 정말 친절합니다."
              </p>
              <p className="font-semibold text-primary">— 최★민 고객님</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28" aria-label="전화 예약 및 연락처">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">지금 바로 예약하세요</h2>
            <p className="text-xl text-muted-foreground mb-8">
              프로방스 가락동 노래방에서 특별한 경험을 만들어보세요
            </p>

            <div className="space-y-6">
              <div className="p-8 bg-secondary/30 rounded-xl">
                <div className="text-6xl font-bold text-primary mb-4">010-9669-8266</div>
                <p className="text-lg text-muted-foreground mb-6">24시간 전화 예약 가능</p>
                <a href={phoneLink}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full gap-2">
                    <Phone className="w-5 h-5" />
                    전화로 예약하기
                  </Button>
                </a>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h4 className="font-semibold mb-2">위치</h4>
                  <p className="text-muted-foreground">
                    서울 송파구 가락동<br />
                    가락시장역/경찰병원역 근처
                  </p>
                </div>
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h4 className="font-semibold mb-2">운영시간</h4>
                  <p className="text-muted-foreground">
                    매일 24시간 운영<br />
                    연중무휴
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12" role="contentinfo">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-primary mb-2">[프로방스] 가락동 노래방</div>
              <p className="text-sm text-muted-foreground">
                프리미엄 음향과 럭셔리한 인테리어로 특별한 경험을 제공합니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">정보</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">특징</a></li>
                <li><a href="#rooms" className="hover:text-primary transition-colors">시설</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">연락처</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">연락처</h4>
              <a href={phoneLink} className="text-primary font-semibold hover:underline">
                010-9669-8266
              </a>
              <p className="text-sm text-muted-foreground mt-2">24시간 전화 예약 가능</p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 [프로방스] 가락동 노래방. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
