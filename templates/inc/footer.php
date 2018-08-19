<footer>
	<div class="container">
		<div class="row inner">
			<div class="col-sm-3">
				<img src="templates/images/footer-logo.png"  class="img-responsive img" title="logo" alt="logo">
				<p class="des">Tham gia học thử miển phí để cảm nhận độ hiệu quả...</p>
				<button type="button">Học thử </button>
			</div>
			<div class="col-sm-3 links1">
				<h5>Đường dẫn nhanh</h5>
				<hr>
				<ul class="list-unstyled">
					<li>
						<a href="all_courses.php" ><i class="fa fa-link"></i>Tất cả khóa học</a>
					</li>
					<li>
						<a href="about.php" ><i class="fa fa-link"></i>Giới thiệu</a>
					</li>
					<li>
						<a href="faq.php" ><i class="fa fa-link"></i>Hỏi đáp</a>
					</li>
					<li>
						<a href="price_plan.php" ><i class="fa fa-link"></i>Báo giá</a>
					</li>
					<li>
						<a href="login_register.php" ><i class="fa fa-link"></i>Đăng ký</a>
					</li>
					<li>
						<a href="contactus.php" ><i class="fa fa-link"></i>Liên hệ</a>
					</li>
				</ul>
			</div>
			<div class="col-sm-3 links2">
				<h5>Khóa học phổ biến</h5>
				<hr>
				<ul class="list-unstyled">
					<li class="box">
						<img src="templates/images/c1.png"  alt="image" title="image" />
						<p>Giới thiệu về ứng dụng phát triển di động  ..</p>
					
					</li>
					<li class="box">
						<img src="templates/images/c2.png"  class="img-responsive" alt="image" title="image" />
						<p>Giới thiệu về phát triển website Wordpress</p>
						
					</li>
				</ul>
			</div>
			<div class="col-sm-3 links2">
				<h5>Liên hệ</h5>
				<hr>
				<p class="des1">Liên hệ với chúng tôi theo thông tin sau.</p>
				<ul class="list-unstyled contact">
					<li>
						<i class="icofont icofont-home"></i> Địa chỉ : K142/39A, Dien Bien Phu Street, Da Nang City
					</li>
					<li>
						<i class="icofont icofont-phone"></i> 	Số điện thoại :0905434469
					</li>
					<li>
						<i class="icofont icofont-globe"></i> <a href="#">Email : hungtv2016@gmail.com</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</footer>
<!-- footer end here -->

<!-- jquery -->

<script type="text/javascript">
			$(".hover-search").hover(function(){
      $('.hover-focus').focus();
      
        
});
</script>
 <script type="text/javascript">

       $( ".f2f" ).change(function() {
        $('.val-f2f').html($(this).val()+ "%");
        $('.val-onl').html((100-parseInt($(this).val()))+ "%");
      });
        $( ".change-cat" ).change(function() {
         if($(this).val() != ''){
              $('.show-class').show();
           } else{
             $('.show-class').hide();
           }
       
      });
      </script>
<!-- bootstrap js -->
<script src="templates/js/bootstrap.min.js" type="text/javascript"></script>
<!--bootstrap select-->
<script src="templates/js/bootstrap-select.js"  type="text/javascript"></script>
<!-- owlcarousel js -->
<script src="templates/js/owl.carousel.min.js" type="text/javascript"></script>
<!--internal js-->
<script src="templates/js/internal.js"  type="text/javascript"></script>

</body>
</html>
