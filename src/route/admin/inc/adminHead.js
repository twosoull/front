import { Helmet } from "react-helmet";

function AdminHead(){
    return(
        <div>
        <Helmet>
            <link rel="apple-touch-icon" href="/logo192.png" />
            <link href="/resources/vendors/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet " />
            <link href="/resources/vendors/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
            <link href="/resources/vendors/nprogress/nprogress.css" rel="stylesheet" />
            <link href="/resources/vendors/iCheck/skins/flat/green.css" rel="stylesheet" />
            <link href="/resources/build/css/custom.min.css" rel="stylesheet" />


            <link href="/resources/vendors/animate.css/animate.min.css" rel="stylesheet" />
            <script src="/resources/js/jquery-3.4.1.min.js"></script>
            <script src="/resources/vendors/jquery/dist/jquery.min.js"></script>
            <script src="/resources/vendors/fastclick/lib/fastclick.js"></script>
            <script src="/resources/vendors/nprogress/nprogress.js"></script>
            {
                /*<script src="/resources/build/js/custom.min.js"></script>*/
                /*<script src="/resources/vendors/iCheck/icheck.min.js"></script>*/
                /*<script src="/resources/vendors/bootstrap/dist/js/bootstrap.bundle.min.js"></script>*/
            }
        </Helmet>
    </div>
    )
}

export default AdminHead;