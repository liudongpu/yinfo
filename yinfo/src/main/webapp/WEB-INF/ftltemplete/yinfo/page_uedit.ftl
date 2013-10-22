
<@m_site_common_header />
<#assign  userinfo=pageinfo.getPageOptions()  >

<@m_html_addjs [base_zero+"zen/zen_page.js"] />
<div class="y_center">
		<div class="yinfo_user">
			<div class="yinfo_list_nav">
				<a href="/">回到首页</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="">用户中心</a>
			</div>
			<div class="b_h10"></div>

			<@m_site_common_user_menu />
			<div class="yinfo_user_body">
				<div class="yinfo_user_body_title">我的资料</div>
				<div class="b_h10"></div>
				<div class="yinfo_user_body_show">
					<div class="yinfo_user_body_edit" style="width:95%;">
						<form id="page_form" class="form-horizontal"   action="func-v_y_info-0e96331b4b404df7ac7c08bec3f6cf0c-func_from_page_did=416120105" method="post">
							<#list pageinfo.getPageData() as e_list>
							
								<@m_page_autorun e_list />
							
							</#list>
							
							
							<div class="control-group">
							    <div class="controls">
							      
							      <a class="btn  btn-success btn-large" onclick="zen.page.submit(this,'func-v_y_info-0e96331b4b404df7ac7c08bec3f6cf0c-func_from_page_did=416120105')"><i class="icon-ok icon-white"></i>&nbsp;&nbsp;提交修改</a>
										&nbsp;&nbsp;&nbsp;&nbsp;<a  href="home-${userinfo["info_domain"]}" target="_blank">查看链接</a>				 
							    </div>
						  	</div>
							
							
							
							
							
						
						</form>
						<div class="b_h40"></div>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
			<div class="b_h40"></div>
		</div>
	</div>

<script>

				
			CKEDITOR.replaceAll( function( textarea, config ) {
			
			 config.toolbar = [
					[ 'Bold', 'Italic', '-', 'NumberedList', 'BulletedList', '-', 'Link', 'Unlink' ],
					[ 'FontSize', 'TextColor', 'BGColor' ]
				];
			});	
</script>

<@m_site_common_footer />



