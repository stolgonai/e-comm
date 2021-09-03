import './PageOfReviews.css'
import backIcon from '../../assets/forvardIcon.png'
import star from '../../assets/revStar.png'
import inactiveStar from '../../assets/inactive-star.svg'
import thumbUpIcon from '../../assets/thumb_up.svg'
import penIcon from '../../assets/penIcon.svg'

function PageOfReviews(){

    return(
        <div className="allReviews">
            <header className="revHeader">
                <div className="goToBack">
                    <img src={backIcon} alt="got to back" />
                </div>
                <h1 className="reviewHeaderTitle">Rating&Reviews</h1>
            </header>

            <div className="ratingBlock">
                <div className="rates">
                    <span className="rateAverg">4.3</span>
                    <span className="totalRatings">23 ratings</span>
                </div>

                <div className="ratesInGraffic">
                    <div className="ratesInStar">
                        <div className="fiveStar">
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                        </div>
                        <div className="fiveStar">
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                        </div>
                        <div className="fiveStar">
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                        </div>
                        <div className="fiveStar">
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                        </div>
                        <div className="fiveStar">
                            <img className="oneSmallActiveStar" src={star} alt="star" />
                        </div>
                        
                    </div>

                    <div className="ratesInGrafficLine">
                        <div className="rangeLine one"></div>
                        <div className="rangeLine two"></div>
                        <div className="rangeLine three"></div>
                        <div className="rangeLine four"></div>
                        <div className="rangeLine five"></div>
                    </div>

                    <div className="ratesInNums">
                        <div className="rateInNums">12</div>
                        <div className="rateInNums">5</div>
                        <div className="rateInNums">4</div>
                        <div className="rateInNums">2</div>
                        <div className="rateInNums">0</div>
                    </div>
                </div>


            </div>

            <div className="peoplesReview">
                <div className="headLineRview">8 reviews </div>

            <form>
                <input className="checkBox" type="checkbox" id="withPhoto" name="withPhoto" value="photo"/>
                <label for="withPhoto"> With photo </label>
            </form>
            </div>

            <div className="customerReview">
                <button className="btn avatar">
                </button>
                <div className="reviewBlock">
                    <h3 className="caption-1">Helene Moore</h3>
                    <div className="customerPersonalRate">
                        <div className="personalRate">
                            <img  src={star} alt="star" />
                            <img  src={star} alt="star" />
                            <img  src={star} alt="star" />
                            <img  src={star} alt="star" />
                            <img  src={inactiveStar} alt="star" />
                        </div>
                        <div className="reviewdate">
                        June 5, 2019
                        </div>
                    </div>
                    <div className="reviewText">
                    The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.
                    </div>
                    <div className="helpfulLink">
                        <span className="helpFulLink">Helpful</span>
                        <img id="thumbUp" src={thumbUpIcon} alt="thumb up icon" />
                    </div>
                </div>
            <footer className="review">
                <button className="btn writeReviewBtn"><img className="pen" src={penIcon} alt="pen" />Write a review </button>
                </footer>
            </div>
            <div className="customerReview">
                    <button className="btn avatar">
                    </button>
                    <div className="reviewBlock">
                        <h3 className="caption-1 nextCustomerName">Kate Doe</h3>
                        <div className="customerPersonalRate2">
                        <div className="personalRate">
                            <img  src={star} alt="star" />
                            <img  src={star} alt="star" />
                            <img  src={star} alt="star" />
                            <img  src={star} alt="star" />
                            <img  src={inactiveStar} alt="star" />
                        </div>
                        <div className="reviewdate">
                        June 5, 2019
                        </div>
                    </div>
                    <div className="reviewText">
                    The dress is great! Very classy and comfortable. It fit perfectly! I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldn't recommend it for those big chested as I am smaller chested and it fit me perfectly. The underarms were not too wide and the dress was made well.
                    </div>
                    <div className="helpfulLink">
                        <span className="helpFulLink">Helpful</span>
                        <img id="thumbUp" src={thumbUpIcon} alt="thumb up icon" />
                    </div>
                    </div>
            </div>

            <div className="gradientEffect"></div>   

        </div>
    )
}
export default PageOfReviews