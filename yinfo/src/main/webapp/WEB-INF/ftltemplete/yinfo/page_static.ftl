
<#assign page_obj=pageexec.upDataOne("y_static","uid",pageinfo.getWebSet()["Url_Option"])>
<@m_site_common_header />



	<div class="y_center">
		<div class="yinfo_user">
			<div class="yinfo_list_nav">
				<a href="/">回到首页</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="">${page_obj["title"]}</a>
			</div>
			<div class="b_h10"></div>

			<div class="yinfo_user_menu">
				<div class="yinfo_user_menu_show">
					
					
					<div class="c_sub">
						<ul>
							
							<#list pageexec.upData("y_static","type_cid","32630001") as el> 
								
								<li><a href="${base_url}yinfo/static-static-${el["uid"]}">${el["title"]}</a></li>
							</#list>
							
						</ul>
					</div>
					
				</div>
			</div>
			<div class="yinfo_user_body">
				<div class="yinfo_user_body_title">${page_obj["title"]}</div>
				<div class="b_h10"></div>
				<div class="yinfo_user_body_show" style="padding:20px;">
					<form class="form-horizontal" method="post" action="">
						${page_obj["content"]}
					</form>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="b_h40"></div>
		</div>
	</div>







	<script>
		$(document).ready(function() {
			zen.yinfo.headernav(false);
		});

		
	</script>



<@m_site_common_footer />
