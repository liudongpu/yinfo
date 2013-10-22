

<@m_site_common_header />
<#assign  userinfo=pageinfo.getPageOptions()  >


<div class="y_center">
		<div class="yinfo_user">
			<div class="yinfo_list_nav">
				<a href="/">回到首页</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="">用户中心</a>
			</div>
			<div class="b_h10"></div>

			<@m_site_common_user_menu />
			<div class="yinfo_user_body">
				<div class="yinfo_user_body_title">修改密码</div>
				<div class="b_h10"></div>
				<div class="yinfo_user_body_show">
					<form class="form-horizontal" method="post" action="${base_url}yinfo/func-changepass">
						<input type="hidden" name="cookieid"  value="${userinfo["cookieid"]}"/>
						<div class="b_h10"></div>
						<div class="control-group">
							<label class="control-label">注册邮箱：</label> <input type="text" value="${userinfo["uname"]}" readonly="readonly"/> 
						</div>
						<div class="b_h10"></div>
						<div class="control-group">
							<label class="control-label">原始密码：</label> <input type="password" name="oldpass" value="" /> 
						</div>
						<div class="b_h10"></div>
						<div class="control-group">
							<label class="control-label">新密码：</label> <input type="password" name="userpass"  /> 
						</div>
						<div class="b_h10"></div>
						<div class="control-group">
							<label class="control-label">重复新密码：</label> <input type="password" name="userpass2"  /> 
						</div>
						<div class="b_h10"></div>
						<div class="control-group">
							<div class="controls">
								<a  class="btn btn-success" onclick="zen.yinfo.submit(this)">确认修改</a>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="b_h40"></div>
		</div>
	</div>






<@m_site_common_footer />