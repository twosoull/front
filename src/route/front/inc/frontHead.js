import { Helmet } from "react-helmet";

function UserHead(){
    return(
        <div>
            <Helmet>
                <link rel="stylesheet" href="/resources/css/common.css" />
                <link rel="stylesheet" href="/resources/css/swiper.min.css" />
                <link rel="stylesheet" href="/resources/css/style.css" />
                <script src="/resources/js/swiper.min.js"></script>
                <script src="/resources/js/custom.js"></script>
            </Helmet>
        </div>
    )
}

export default UserHead;