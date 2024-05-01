import { Helmet } from "react-helmet";

function UserHead(){
    return(
        <div>
            <Helmet>
                <link rel="stylesheet" href="/resources/css/common.css" />
                <link rel="stylesheet" href="/resources/css/swiper.min.css" />
                <link rel="stylesheet" href="/resources/css/style.css" />
            </Helmet>
        </div>
    )
}

export default UserHead;