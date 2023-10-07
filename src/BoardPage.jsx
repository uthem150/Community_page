import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import './BoardPage.css'; // BoardPage.css 파일을 import

const BoardPage = () => {
    const handleButtonClick = () => {
        //버튼 누르면 맨 위 글로 이동
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // 부드러운 스크롤링 효과 적용 (선택 사항)
        });
    };
    useEffect(() => {
          const customBars = document.querySelectorAll('.custom-bar');

  customBars.forEach((customBar) => {
const textBody = customBar.querySelector('.text-body');
            const originalText = textBody.textContent;
            const maxCharacters = 200;

            if (originalText.length > maxCharacters) {
                const truncatedText = originalText.slice(0, maxCharacters);
                textBody.textContent = truncatedText + '... '; // ... 추가

                const moreButton = document.createElement('button');
                moreButton.classList.add('more-text-button');
                moreButton.textContent = '더보기';

                textBody.appendChild(moreButton); // 기존 텍스트 바로 뒤에 버튼 추가

                moreButton.addEventListener('click', function () {
                    textBody.textContent = originalText;
                    this.remove();
textBody.style.fontSize = '2rem';
                });
            }
        });

        const filterToggle = document.getElementById('filter-toggle');
        const filterOptionsContainer = document.getElementById('filter-options');

        if (filterToggle && filterOptionsContainer) {
            // 초기에 필터 옵션 숨기기
            filterOptionsContainer.style.display = 'none';

            filterToggle.addEventListener('click', function () {
                if (getComputedStyle(filterOptionsContainer).display === 'none') {
                    filterOptionsContainer.style.display = 'flex';
                } else {
                    filterOptionsContainer.style.display = 'none';
                }
            });
        }

        document.querySelectorAll('.filter-option').forEach((option) => {
            option.addEventListener('mousedown', function () {
                document.querySelectorAll('.filter-option').forEach((btn) => {
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                });

                this.style.backgroundColor = '#86E57F';
                this.style.color = 'white';
            });

            option.addEventListener('touchstart', function () {
                document.querySelectorAll('.filter-option').forEach((btn) => {
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                });

                this.style.backgroundColor = '#86E57F';
                this.style.color = 'white';
            });

            option.addEventListener('click', function () {
                const selectedFilterValue = this.getAttribute('data-filter');

                console.log('Selected Filter:', selectedFilterValue);

                filterOptionsContainer.style.display = 'none';
            });
        });
    }, []);

    return (
        <div>
            <div className="header">
                <h1 className="my-page-container">Community</h1>
                <img src="image/Edit.png" alt="아이콘" />
            </div>

            <div className="filter-container">
                <img id="filter-toggle" src="image/Filter 2.png" alt="필터 아이콘" />

                <div id="filter-options" className="hidden">
                    <button className="filter-option" data-filter="recent-filter">
                        최신 순
                    </button>
                    <button className="filter-option" data-filter="like-filter">
                        공감 순
                    </button>
                    <button className="filter-option" data-filter="-4">
                        병장
                    </button>
                    <button className="filter-option" data-filter="-3">
                        상병
                    </button>
                    <button className="filter-option" data-filter="-2">
                        일병
                    </button>
                    <button className="filter-option" data-filter="-1">
                        이병
                    </button>
                </div>
            </div>

            <div id="custom-post-container">{/* 게시글 요소들 */}</div>

            {/* 게시글 컨테이너 */}
            <div className="post-container">
                {/* 게시글 내용 */}
                <div className="box-wrapper">
                    {/* 첫 번째 게시글 */}
                    <div className="custom-bar">
                        {/* 프로필 이미지 */}
                        <img src="/image/Ellipse 11.png" alt="" className="custom-image" />
                        {/* 사용자 닉네임 */}
                        <span className="user-nickname">힘내자청춘 (병장 2호봉)</span>
                        {/* 작성 날짜 */}
                        <span className="day">4일전</span>
                        {/* 더보기 버튼 
                        <button className="more-button">                       
                            <img src="/image/More Square.png" alt="" />
                        </button> */}

                        {/* 게시글 내용 */}
                        <div className="text-container">
                            <span className="text-body">
                                “회사의 목표가 너무 높다며 불평불만을 늘어놓거나 포기할 것 같은
                                사람은 면접 단계에서 다 걸러내려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ려 합니다. 고객
                                눈높이는 계속 높아지니 어쩔 수 없어요. 이틀 내 배송을 실현하면,
                                다잉ㄹ 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하..려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ 배송을 원하는 게
                                고객이에요. 그래서 항상 높은 목표를 갖고 일해야 합니다. 꽤
                                일반화하.. 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하...
                            </span>
                        </div>
                        <div className="action-container">
                            {/* 반응 이미지 */}
                            <button onClick={handleButtonClick}>
                            <img src="/image/LightHeart.png" alt="" className="action-image-1" />
                            </button>
                            {/* 반응 이미지 */}
                            <button onClick={handleButtonClick}>
                            <img src="/image/Chat.png" alt="" className="action-image-2" />
                            </button>
                            {/* 반응 이미지 */}
                            <button onClick={handleButtonClick}>
                            <img src="/image/Bookmark.png" alt="" className="action-image-3" />
                            </button>
                        </div>
                    </div>
                </div>
                
                
                {/* 게시글 내용 */}
                <div className="box-wrapper">
                    {/* 첫 번째 게시글 */}
                    <div className="custom-bar">
                        {/* 프로필 이미지 */}
                        <img src="/image/Ellipse 11.png" alt="" className="custom-image" />
                        {/* 사용자 닉네임 */}
                        <span className="user-nickname">힘내자청춘 (병장 2호봉)</span>
                        {/* 작성 날짜 */}
                        <span className="day">4일전</span>
                        {/* 더보기 버튼 
                        <button className="more-button">
                            <img src="/image/More Square.png" alt="" />
                        </button> */}

                        {/* 게시글 내용 */}
                        <div className="text-container">
                            <span className="text-body">
                                “회사의 목표가 너무 높다며 불평불만을 늘어놓거나 포기할 것 같은
                                사람은 면접 단계에서 다 걸러내려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ려 합니다. 고객
                                눈높이는 계속 높아지니 어쩔 수 없어요. 이틀 내 배송을 실현하면,
                                다잉ㄹ 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하..려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ 배송을 원하는 게
                                고객이에요. 그래서 항상 높은 목표를 갖고 일해야 합니다. 꽤
                                일반화하.. 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하...
                            </span>
                        </div>
                    </div>
                </div>
                
                
                {/* 게시글 내용 */}
                <div className="box-wrapper">
                    {/* 첫 번째 게시글 */}
                    <div className="custom-bar">
                        {/* 프로필 이미지 */}
                        <img src="/image/Ellipse 11.png" alt="" className="custom-image" />
                        {/* 사용자 닉네임 */}
                        <span className="user-nickname">힘내자청춘 (병장 2호봉)</span>
                        {/* 작성 날짜 */}
                        <span className="day">4일전</span>
                        {/* 더보기 버튼 */}
                        <button className="more-button">
                            <img src="/image/More Square.png" alt="" />
                        </button>

                        {/* 게시글 내용 */}
                        <div className="text-container">
                            <span className="text-body">
                                “회사의 목표가 너무 높다며 불평불만을 늘어놓거나 포기할 것 같은
                                사람은 면접 단계에서 다 걸러내려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ려 합니다. 고객
                                눈높이는 계속 높아지니 어쩔 수 없어요. 이틀 내 배송을 실현하면,
                                다잉ㄹ 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하..려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ 배송을 원하는 게
                                고객이에요. 그래서 항상 높은 목표를 갖고 일해야 합니다. 꽤
                                일반화하.. 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하...
                            </span>
                        </div>
                    </div>
                </div>
                
                
                
                {/* 게시글 내용 */}
                <div className="box-wrapper">
                    {/* 첫 번째 게시글 */}
                    <div className="custom-bar">
                        {/* 프로필 이미지 */}
                        <img src="/image/Ellipse 11.png" alt="" className="custom-image" />
                        {/* 사용자 닉네임 */}
                        <span className="user-nickname">힘내자청춘 (병장 2호봉)</span>
                        {/* 작성 날짜 */}
                        <span className="day">4일전</span>
                        {/* 더보기 버튼 */}
                        <button className="more-button">
                            <img src="/image/More Square.png" alt="" />
                        </button>

                        {/* 게시글 내용 */}
                        <div className="text-container">
                            <span className="text-body">
                                “회사의 목표가 너무 높다며 불평불만을 늘어놓거나 포기할 것 같은
                                사람은 면접 단계에서 다 걸러내려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ려 합니다. 고객
                                눈높이는 계속 높아지니 어쩔 수 없어요. 이틀 내 배송을 실현하면,
                                다잉ㄹ 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하..려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ 배송을 원하는 게
                                고객이에요. 그래서 항상 높은 목표를 갖고 일해야 합니다. 꽤
                                일반화하.. 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하...
                            </span>
                        </div>
                    </div>
                </div>
                
                
                
                {/* 게시글 내용 */}
                <div className="box-wrapper">
                    {/* 첫 번째 게시글 */}
                    <div className="custom-bar">
                        {/* 프로필 이미지 */}
                        <img src="/image/Ellipse 11.png" alt="" className="custom-image" />
                        {/* 사용자 닉네임 */}
                        <span className="user-nickname">힘내자청춘 (병장 2호봉)</span>
                        {/* 작성 날짜 */}
                        <span className="day">4일전</span>
                        {/* 더보기 버튼 */}
                        <button className="more-button">
                            <img src="/image/More Square.png" alt="" />
                        </button>

                        {/* 게시글 내용 */}
                        <div className="text-container">
                            <span className="text-body">
                                “회사의 목표가 너무 높다며 불평불만을 늘어놓거나 포기할 것 같은
                                사람은 면접 단계에서 다 걸러내려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ려 합니다. 고객
                                눈높이는 계속 높아지니 어쩔 수 없어요. 이틀 내 배송을 실현하면,
                                다잉ㄹ 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하..려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ 배송을 원하는 게
                                고객이에요. 그래서 항상 높은 목표를 갖고 일해야 합니다. 꽤
                                일반화하.. 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하...
                            </span>
                        </div>
                    </div>
                </div>
                
                
                
                {/* 게시글 내용 */}
                <div className="box-wrapper">
                    {/* 첫 번째 게시글 */}
                    <div className="custom-bar">
                        {/* 프로필 이미지 */}
                        <img src="/image/Ellipse 11.png" alt="" className="custom-image" />
                        {/* 사용자 닉네임 */}
                        <span className="user-nickname">힘내자청춘 (병장 2호봉)</span>
                        {/* 작성 날짜 */}
                        <span className="day">4일전</span>
                        {/* 더보기 버튼 */}
                        <button className="more-button">
                            <img src="/image/More Square.png" alt="" />
                        </button>

                        {/* 게시글 내용 */}
                        <div className="text-container">
                            <span className="text-body">
                                “회사의 목표가 너무 높다며 불평불만을 늘어놓거나 포기할 것 같은
                                사람은 면접 단계에서 다 걸러내려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ려 합니다. 고객
                                눈높이는 계속 높아지니 어쩔 수 없어요. 이틀 내 배송을 실현하면,
                                다잉ㄹ 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하..려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ 배송을 원하는 게
                                고객이에요. 그래서 항상 높은 목표를 갖고 일해야 합니다. 꽤
                                일반화하.. 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하...
                            </span>
                        </div>
                    </div>
                </div>
                
                
                
                {/* 게시글 내용 */}
                <div className="box-wrapper">
                    {/* 첫 번째 게시글 */}
                    <div className="custom-bar">
                        {/* 프로필 이미지 */}
                        <img src="/image/Ellipse 11.png" alt="" className="custom-image" />
                        {/* 사용자 닉네임 */}
                        <span className="user-nickname">힘내자청춘 (병장 2호봉)</span>
                        {/* 작성 날짜 */}
                        <span className="day">4일전</span>
                        {/* 더보기 버튼 */}
                        <button className="more-button">
                            <img src="/image/More Square.png" alt="" />
                        </button>

                        {/* 게시글 내용 */}
                        <div className="text-container">
                            <span className="text-body">
                                “회사의 목표가 너무 높다며 불평불만을 늘어놓거나 포기할 것 같은
                                사람은 면접 단계에서 다 걸러내려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ려 합니다. 고객
                                눈높이는 계속 높아지니 어쩔 수 없어요. 이틀 내 배송을 실현하면,
                                다잉ㄹ 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하..려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ 배송을 원하는 게
                                고객이에요. 그래서 항상 높은 목표를 갖고 일해야 합니다. 꽤
                                일반화하.. 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하...
                            </span>
                        </div>
                    </div>
                </div>
                
                
                
                {/* 게시글 내용 */}
                <div className="box-wrapper">
                    {/* 첫 번째 게시글 */}
                    <div className="custom-bar">
                        {/* 프로필 이미지 */}
                        <img src="/image/Ellipse 11.png" alt="" className="custom-image" />
                        {/* 사용자 닉네임 */}
                        <span className="user-nickname">힘내자청춘 (병장 2호봉)</span>
                        {/* 작성 날짜 */}
                        <span className="day">4일전</span>
                        {/* 더보기 버튼 */}
                        <button className="more-button">
                            <img src="/image/More Square.png" alt="" />
                        </button>

                        {/* 게시글 내용 */}
                        <div className="text-container">
                            <span className="text-body">
                                “회사의 목표가 너무 높다며 불평불만을 늘어놓거나 포기할 것 같은
                                사람은 면접 단계에서 다 걸러내려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ려 합니다. 고객
                                눈높이는 계속 높아지니 어쩔 수 없어요. 이틀 내 배송을 실현하면,
                                다잉ㄹ 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하..려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ 배송을 원하는 게
                                고객이에요. 그래서 항상 높은 목표를 갖고 일해야 합니다. 꽤
                                일반화하.. 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하...
                            </span>
                        </div>
                    </div>
                </div>
                
                
                
                {/* 게시글 내용 */}
                <div className="box-wrapper">
                    {/* 첫 번째 게시글 */}
                    <div className="custom-bar">
                        {/* 프로필 이미지 */}
                        <img src="/image/Ellipse 11.png" alt="" className="custom-image" />
                        {/* 사용자 닉네임 */}
                        <span className="user-nickname">힘내자청춘 (병장 2호봉)</span>
                        {/* 작성 날짜 */}
                        <span className="day">4일전</span>
                        {/* 더보기 버튼 */}
                        <button className="more-button">
                            <img src="/image/More Square.png" alt="" />
                        </button>

                        {/* 게시글 내용 */}
                        <div className="text-container">
                            <span className="text-body">
                                “회사의 목표가 너무 높다며 불평불만을 늘어놓거나 포기할 것 같은
                                사람은 면접 단계에서 다 걸러내려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ려 합니다. 고객
                                눈높이는 계속 높아지니 어쩔 수 없어요. 이틀 내 배송을 실현하면,
                                다잉ㄹ 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하..려 합니다. 고객 눈높이는 계속 높아지니
                                어쩔 수 없어요. 이틀 내 배송을 실현하면, 다잉ㄹ 배송을 원하는 게
                                고객이에요. 그래서 항상 높은 목표를 갖고 일해야 합니다. 꽤
                                일반화하.. 배송을 원하는 게 고객이에요. 그래서 항상 높은 목표를 갖고
                                일해야 합니다. 꽤 일반화하...
                            </span>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* 하단 바 */}
            <div className="footer">
                <div>
                    <button>
                        <img src="image/Chat.png" alt="아이콘 1" />
                    </button>
                    <span></span>
                </div>
                <div>
                    <button onClick={handleButtonClick}>
                        <img src="image/Document.png" alt="아이콘 2" />
                    </button>
                    <span></span>
                </div>
                <div>
                    <button>
                        <img src="image/Home.png" alt="아이콘 3" />
                    </button>
                    <span></span>
                </div>
                <div>
                    <button>
                        <img src="image/Plus.png" alt="아이콘 4" />
                    </button>
                    <span></span>
                </div>
                <div>
                    <button>
                        <img src="image/Profile.png" alt="아이콘 5" />
                    </button>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default BoardPage;