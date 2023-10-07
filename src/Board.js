import React from 'react';
import './BoardPage.css'; // BoardPage.css 파일을 import

function BoardPage() {
  return (
    <div>
      <div className="header">
        <h1 className="my-page-container">Community</h1>
        <img src="image/Edit.png" alt="아이콘" />
      </div>

      <div className="filter-container">
        <img id="filter-toggle" src="image/Filter 2.png" alt="필터 아이콘" />
        <div id="filter-options" className="hidden">
          <button className="filter-option" data-filter="recent-filter">최신 순</button>
          <button className="filter-option" data-filter="like-filter">공감 순</button>
          <button className="filter-option" data-filter="-4">병장</button>
          <button className="filter-option" data-filter="-3">상병</button>
          <button className="filter-option" data-filter="-2">일병</button>
          <button className="filter-option" data-filter="-1">이병</button>
        </div>
      </div>

      <div id="custom-post-container">
        {/* 게시글 요소들 */}
      </div>

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
            {/* 더보기 버튼 */}
            <button className="more-button">
              <img src="/image/More Square.png" alt="" />
            </button>
            {/* 게시글 내용 */}
            <div className="text-container">
              <span className="text-body">“회사의 목표가 너무 높다며 불평불만을...</span>
            </div>
          </div>

          {/* 두 번째 게시글 */}
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
             <span className="text-body">“회사의 목표가 너무 높다며 불평불만을...</span>
           </div>
         </div>

         {/* 세 번째 게시글과 이후의 게시글들도 동일한 구조로 추가해주세요 */}

       </div> 
     </div>

     {/* 하단 바 */}
     <div className="footer">
       <div>
         <button><img src="/image/Chat.png" alt="" /></button>
         <span></span>
       </div> 
       {/* 다른 하단 바 아이콘들도 동일한 구조로 추가해주세요 */}

    </div> 
  </div> 
);
}

export default BoardPage;