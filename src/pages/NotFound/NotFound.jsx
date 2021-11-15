// 引入图片方式
import img404 from '../../assets/images/404.jpg'

import "./NotFound.scss"

const NotFound = ()=>{
    return (
        <div className="not-found">
            <img src={img404} alt="" />
        </div>
    )
}

export default NotFound