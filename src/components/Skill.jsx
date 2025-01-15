import React from "react";
import { skillText } from "@/constants";

const Skill = () => {
    return (
        <section id="skill">
            <div className="skill__inner">
                <h2 className="skill__title">
                    전선욱 <em>WHO AM I?</em>
                </h2>
                <div className="skill__desc">
                     
                    <span>1.</span> 
                            <h3>SQA를 지향하는 이유?</h3><br/>
                            <p> 
                            SQA 활동을 통해 개발 단계에서 발생할 수 있는 잠재적 문제를 조기에 발견하고 해결하는 것은 비용과 시간을 절약할 뿐만 아니라, 최종 사용자에게 더 나은 가치를 전달할 수 있는 핵심 요소라고 생각합니다.<br/><br/> 이러한 이유로 SQA는 단순히 결함을 찾는 역할에 그치지 않고, 프로젝트의 전반적인 성공과 품질 향상을 주도하는 중요한 과정이라고 생각합니다.
                            </p>
                            <h3>프로젝트에서 가장 중요하게 생각하는 가치관 </h3><br/>
                            <p> 
                            SQA는 변화하고 발전하는 IT 서비스 환경에서 다양한 직군들과 협업을 통해 개선된 서비스를 목표로 하는 직무라고 생각합니다. 저는 대학 시절 다양한 팀 프로젝트를 통해 문제 해결과 협업의 가치를 실현한 경험이 있습니다.<br/><br/> 한 프로젝트에서는 팀원 간의 의견 차이를 조율하고 일정에 맞춰 시스템 오류를 해결한 경험이 있습니다. 이러한 과정에서 존중과 자기객관화를 통해 원활한 협업을 이끌었으며, 이를 바탕으로 끊임없는 자기개발이 중요하다는 것을 깨달았습니다.
                            </p>

                            <h3>SQA 직무에서 JavaScript로 개발을 한 이유 </h3><br/>
                            <p> 
                            JavaScript를 활용한 개발은 실제 사용자 환경에서 발생할 수 있는 다양한 상호작용을 이해하고, 이를 기반으로 테스트 케이스를 설계하며 테스트 도구에서 자주 사용되는 언어라고 생각합니다. <br/><br/> 프로젝트를 진행하면서 코드의 가독성과 유지보수성을 높이는 방법을 고민했고 개발자와의 원활한 소통에도 기여할 수 있다고 생각합니다.
                            </p>
                    <div>
                        <span>2.</span> 
                            <h3>학력 및 자격사항</h3><br/>
                            <p > ▶한국공학대학교(IT경영학과)(2019.03 ~ 2025.02(졸업예정(졸업조건 충족)))<br/><br/>
                                 ▶머니스테이션(인턴과정(실습 및 파트) 2024.01.02 ~ 진행)(마케팅부서) <br/><br/>
                                 ▶웹디자인 기능사<br/><br/>
                                 ▶OPIC IH등급<br/><br/>
                                 ▶SQLD<br/><br/>
                                 ▶컴퓨터활용능력2급<br/><br/>
                                 ▶교내 공모전 -팀 프로젝트 APP 기획- 우수상<br/><br/>
                                 ▶운전면허 보통 2종 <br/><br/>
                                 ▶바리스타 2급 <br/><br/>
                            </p>
                     </div>
                     <div>
                            <span>3.</span> 
                            <h3>프로젝트 주요스택 </h3> <a className="go" href="https://github.com/jeonportfolio" target="blank">깃허브 바로가기</a><br/><br/><br/><br/>
                            
                            <p > <h4 >★나의 유튜브 영상 저장 사이트</h4><br/>
                                  
                                  → 유튜브에서 제가 원하는 영상을 주제별로 쉽게 찾고 나만의 공간에 저장할 수 있는 사이트를 만들고자 하였습니다<br/><br/>
                                  → 진행기간(2024.3.19 ~ 2024.04.10) <br/><br/>
                                  
                                  <span className="fixed">▶데이터 제한으로 Youtube API에서 Rapid API의 변환</span><br/>
                                  <span className="fixed">▶리액트의 SEO 노출도가 낮은 문제를 발견하고, 타이틀 작업을 추가</span><br/>
                                  <span className="fixed">▶특정 화면 크기(px)에서 Gsap 애니메이션 오류가 발생 CSS를 조정하고 px 단위별로 세밀하게 테스트</span><br/>
                                  <span className="fixed">▶사용자 경험을 개선하기 위해 Suspense와 로딩 기능을 추가</span><br/>
                                  <br/><br/>
                                 
                
                                  <h4 >★영화검색 사이트</h4><br/>
                                  → 편리한 영화 검색 경험을 제공하고, 영화 탐색을 보다 쉽게 접근할 수 있는 플랫폼을 제공하고자 하였습니다.<br/><br/>
                                  → 진행기간(2024.11.13 ~ 2024.12.11) <br/><br/>
                                  <span className="fixed">▶JavaScript에서 동적 타입으로 인한 오류 발생 가능성과 코드 유지보수의 어려움을 느껴, 정적 타입을 지원하는 TypeScript로 리팩토링을 수행하여 코드의 안정성과 가독성 향상</span><br/>
                                  <span className="fixed">▶API 키의 보안 문제를 해결하기 위해 Vercel 서버리스 서비스를 활용</span><br/>
                                  <span className="fixed">▶Omdb API의 한국어 입력 제한 문제를 해결하기 위해 ChatGPT API를 도입하여 사용자들이 영화 정보를 더 쉽게 찾을 수 있도록 개선</span><br/>
                                  <span className="fixed">▶챗봇 답변의 정확도를 높이기 위해 영화를 주제로 파인튜닝 진행</span><br/>
                                  <br/><br/>

                                  <h4 >★할 일 기록 사이트</h4><br/>
                                  → 평소에 많이 사용하는 할일 기록 앱을 웹상에 직접 구축하며 상태 관리의 중요성을 실감하고자 하였습니다.<br/><br/>
                                  → 진행기간(2024.12.22 ~ 2024.01.05) <br/><br/>
                                  <span className="fixed">▶데이터 증발 문제를 겪고 나서, 데이터를 브라우저에 영구적으로 저장할 수 있는 LocalStorage를 사용하여 상태를 유지</span><br/>
                                  <span className="fixed">▶상태 관리의 복잡도가 증가함에 따라, 보다 확장 가능하고 일관된 상태 관리를 위해 useReducer에서 Redux로 전환</span><br/>
                                  <span className="fixed">▶Redux Toolkit의 slice를 활용하여 상태와 Action, Reducer를 효율적으로 관리</span><br/>
                            
                                  <br/><br/>

                                  <h4 >★한눈에 요약봇(진행중)</h4><br/>
                                  → ChatGpt API를 활용한 요약 사이트를 통해 긴 정보를 정확히 요약하고, 사용자 개인의 관심사와 선호도에 맞추어 효율성을 극대화하고자 하였습니다. <br/><br/>
                                  → 진행기간(2025.01.08 ~ ) <br/><br/>
                                  
                            
                                  <br/><br/>
                                  
                                  <h4>★NODE.JS</h4> <br/>
                                  → 실시간 채팅 (프론트(React.js & MongoDB & WebSocket사용))<br/><br/>
                                  <a className="go" href="https://github.com/jeonportfolio/CHATTING-APP-client-" target="blank">프론트 코드</a>   <a className="go" href="https://github.com/jeonportfolio/CHATTING-APP-node.js-" target="blank">백엔드 코드</a><br/><br/>
                                  → 할일앱 기록 API ((mongoDB & router를 활용한 API관리))<br/>
                                  <span className="fixed">▶PostMan을 활용한 API 연동 테스트</span><br/>
                                  <br/>
                                  <a className="go" href="https://github.com/jeonportfolio/Node.js-api" target="blank">코드보기</a> 
                                 
                                 
                            </p>
                        </div>
                   
                  </div>  
            </div>
        </section>
    )
}

export default Skill;
