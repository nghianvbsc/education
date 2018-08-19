<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>B-Learning</title>
<!-- Bootstrap stylesheet -->
<link href="templates/css/bootstrap.css"  rel="stylesheet">
<!-- font -->
<link href="templates/css/css-family=Open+Sans-300,400,600,700,800.css"  rel="stylesheet"> 
<!-- icofont -->
<link href="templates/css/icofont.css" rel="stylesheet" type="text/css" />
<!-- font-awesome -->
<link href="templates/css/font-awesome.min.css"  rel="stylesheet" type="text/css" />
<!-- crousel css -->
<link href="templates/css/owl.carousel.css" rel="stylesheet" type="text/css" />
<!--bootstrap select-->
<link href="templates/css/bootstrap-select.css" rel="stylesheet" type="text/css" />
<!-- stylesheet -->
<link href="templates/css/style.css"  rel="stylesheet" type="text/css"/>
<script src="templates/js/jquery.2.1.1.min.js"  type="text/javascript"></script>
</head>
<body>
<!--top start here -->
<div class="top">
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-xs-12 padding-mobile-none">
				<ul class="list-inline pull-right icon">
					<li>
						<a href="all_courses.php" ><i class="icofont icofont-navigation-menu"></i>Tất cả lớp học</a>
					</li>
					<!-- <li>
						<a href="login_register.php" ><i class="icofont icofont-key"></i>Đăng nhập</a>
					</li>	 -->
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true"><i class="icofont icofont-ui-user"></i>Tài khoản</a>
 
				    <div class="dropdown-menu" style="min-width:200px !important;right:-2px !important;border:none; ">
				     <ul class="list-unstyled">
						<li>
							<a href="profile.php">Thông tin người dùng</a>
						</li>
												<li>
							<a href="profile-gv.php">Thông tin giảng viên</a>
						</li>
						<li>
							<a href="">Đăng xuất</a>
						</li>
					</ul>
    				</div>
  					</li>				
				</ul>
			</div>
		</div>
	</div>
</div>
<!--top end here -->

<!-- header start here-->
<header>
	<div class="container">
		<div class="row">
			<div class="col-md-3 col-sm-3 col-xs-12">
				<div id="logo">
					<a href="index.php" >
						<img class="img-responsive" src="templates/images/logo.png"  alt="logo" title="logo" />
					</a>
				</div>
			</div>
			<div class="col-md-6 col-sm-6 col-xs-12">
				<!-- menu start here -->
				<div id="menu">	
					<nav class="navbar">
						<div class="navbar-header">
							
							<button data-target=".navbar-ex1-collapse" data-toggle="collapse" class="btn btn-navbar navbar-toggle" type="button">
								<i class="fa fa-bars" aria-hidden="true"></i>
							</button>
						</div>
						<div class="collapse navbar-collapse navbar-ex1-collapse padd0">
							<ul class="nav navbar-nav text-right">
								<li>
									<a href="index.php" ><i class=" css-fa glyphicon glyphicon-home " aria-hidden="true"></i> Trang chủ</a>
								</li>
								<li>
									<a href="about.php" ><i class=" css-fa glyphicon glyphicon-book" aria-hidden="true"></i> Giới thiệu</a>
								</li>
								<li>
									<a href="price_plan.php" ><i class=" css-fa 	glyphicon glyphicon-list-alt" aria-hidden="true"></i> Báo giá</a>
								</li>
								
									<li class="dropdown"><a href="blog.php" class="dropdown-toggle" data-toggle="dropdown"><i class=" css-fa  fa fa-newspaper-o" aria-hidden="true"></i> Tin tức</a>
									<div class="dropdown-menu repeating">
										<div class="dropdown-inner">
											<ul class="list-unstyled">
												<li>
													<a href="blog.php">  Tin ưu đãi</a>
												</li>
												<li>
													<a href="blog.php" >Kiến thức, kinh nghiệm</a>
												</li>
												<li>
													<a href="blog.php" >Tuyển dụng</a>
												</li>
												<li>
													<a href="blog.php" >Tin tức giáo dục</a>
												</li>
											</ul>
										</div>
									</div>
								</li>
								<li>
								<a href="contactus.php"><i class=" css-fa glyphicon glyphicon-envelope" aria-hidden="true"></i> Liên hệ</a>
							</li>
					
							</ul>
						</div>
					</nav>
				</div>
				<!-- menu end here -->
			</div>
			<div class="col-md-3 col-sm-3 col-xs-12">
				<ul class="list-inline icon pull-right">
					<li>
						<form class="form-horizontal" method="post" id="srch">
							<fieldset>
								<div class="form-group">
									<input name="s" value="" class="form-control hover-focus" placeholder="Nhập từ khóa" type="text">
								</div>
								<button type="submit" value="submit" class="btn hover-search">
									<i class="icofont icofont-search"></i>
								</button>
							</fieldset>
						</form>
					</li>
					<li>
						<a href="all_courses.php" style="padding:8px 14px !important " class="btn-primary">Học thử</a>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
</header>