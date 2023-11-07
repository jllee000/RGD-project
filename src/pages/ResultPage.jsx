import React from "react";
import styles from "./start.css" // eslint-disable-next-line
import { Navigate, useNavigate } from "react-router-dom";

function ResultPage() {
    const navigate = useNavigate();
    const Send = ()  => {
        navigate("/")
    };
    return (
        <div className="result_page">
            <h4 className="result_notice">당신의 유형은</h4>
            <h2 className="result_notice">감성충만 극F 사슴</h2>
            <h5 className="result_reco">▼  이 유형을 위한 선물을 추천할게요</h5>
            <div className="result_box">
                
                <div>
                
                    <img className="result_img" src="https://thumbnail7.coupangcdn.com/thumbnails/remote/300x300/image/vendor_inventory/aed1/9edb8d23d70de975f8173ca2e96953a72c1cbf254673879a265458db5c09.png"></img>
                </div>
                    <a href="https://www.coupang.com/vp/products/7420390121?itemId=19247382487&vendorItemId=86363227363&sourceType=srp_product_ads&clickEventId=e6b31d18-1c8f-44e1-9016-8d9f16a7e5a7&korePlacement=15&koreSubPlacement=6&q=%EB%AC%B4%EC%84%A0+%EB%AC%B4%EB%93%9C%EB%93%B1&itemsCount=36&searchId=94b2a05aa0764c528602c07946e36e19&rank=5&isAddedCart=">쿠팡 바로가기</a>
                    <h2 className="result_text">우주선 무드등</h2>
                    <div className="result_tag">
                        <h5 >감성타는 걸 너무나 좋아하는 당신!<br></br>이 무드등과 잔잔한 노래와 함께 <br></br>천장에서 멍때리는 걸 좋아하실 것 같아요</h5>
                        <h4 className="result_ment">#INFP #분위기 # 우울함 즐김 #인생은 뭘까 #아련</h4>
                    </div>
            </div>
            <div className="send_box">
                <button className="set_btn send_btn" onClick={Send}> 결과 공유하기</button>
            </div>
        </div>
    );
}

export default ResultPage;