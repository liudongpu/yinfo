

<@m_site_common_header />

<#assign  pageListSearch=pageinfo.getWebSet()["Url_Option"]?default("")  >



	<div class="y_center">
		<div class="yinfo_login">
			<div class="yinfo_list_nav">
				<a href="/">回到首页</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="">用户登录</a>
			</div>
			<div class="b_h20"></div>
			<div class="yinfo_login_box">
				<div class="yinfo_login_bg">
					<div class="yinfo_login_show">
						<div class="b_h40"></div>
						<div class="span8">
							<div class="c_title">欢迎注册银杏林</div>
							<form class="form-horizontal" action="${base_url}yinfo/func-reg" method="post">
								<div class="b_h40"></div>
								<div class="control-group">
									<span class="c_weight">注册邮箱：</span> <input type="text" id="reg_name" name="reg_name" /> <span
										class="help-inline">请输入您的常用邮箱</span>
								</div>
								<div class="b_h10"></div>
								<div class="control-group">
									<span class="c_weight">设置密码：</span>
									<input type="password" name="reg_pass"/> <span class="help-inline">请输入账户密码</span>
								</div>
								<div class="b_h10"></div>
								<div class="control-group">
									<span class="c_weight">重复密码：</span>
									<input type="password" /> <span class="help-inline">请再次输入密码</span>
								</div>
								<div class="b_h10"></div>
								<div class="control-group">
								<span class="c_weight"></span><input type="checkbox" checked="checked"/><a href="static-static-205e15aedd3247949c03e609e346eb21" target="_blank">我已阅读并同意银杏林用户注册协议</a>
								<div class="b_h10"></div>
									<span class="c_weight"></span> <a class="btn  btn-success"  onclick="zen.yinfo.submit(this,zen.yinfo.regsuccess)">&nbsp;&nbsp;注&nbsp;&nbsp;册&nbsp;&nbsp;</a>
									
								</div>
							</form>
						</div>
						<div class="span3">
							<div class="c_help">
								<div class="b_h10"></div>
								<h4>为什么注册银杏林?</h4>
								<ul>
									<li>为您精选所有养老院</li>
									<li>专业人士为您推荐与分析</li>
									<li>入住有礼包推荐</li>
									<li>推荐老人成功入住，即可获取50元现金返利</li>
								</ul>
								<div class="b_h20"></div>
								<span class="c_not">已有账号？</span>
								<div class="b_h10"></div>
								<a class="btn  btn-success" href="${base_url}yinfo/login-login">&nbsp;&nbsp;现在登录&nbsp;&nbsp;</a>
							</div>
						</div>

						<div class="clearfix"></div>
						<div class="b_h40"></div>
					</div>
				</div>

			</div>
		</div>
	</div>









	<script>
		$(document).ready(function() {
			zen.yinfo.headernav(false);
		});
	</script>



<@m_site_common_footer />


