<#include "../zapmacro/zapmacro_common.ftl" />
<#include "../macro/macro_common.ftl" />

<@m_common_page_head_common e_title="后台登陆界面" e_bodyclass="easyui-layout zab_manage_login_body" />

	<div class="c_login_box">
		<div class=" w_m_auto c_login_header c_login_width">

			<div class="w_fl w_mt_15">

				<div style="width:146px;height:40px;background-position: 0px -260px;background-image:url(/resources/yinfo/webyinfo/images/yinfo_png.png)"></div>

			</div>
			<div class="w_fr w_mt_30">
				<ul class="w_ul">
					<li><a href="/">银杏林首页</a></li>
					<li><a href="/yinfo/login-login">会员中心</a></li>
					<li><a href="/yinfo/static-static-1f53de2f4fca4145b72981601318f3fa">机构加盟</a></li>
				</ul>
			</div>
		</div>
		<div class="c_login_bg">
			<div class=" w_m_auto c_login_center c_login_width">
				<div class="w_h_40"></div>
				<div class="c_login_sign">
					<div class="c_login_fix w_opacity_90"></div>
					<div class="c_login_info">

						<div>
							<div class="c_login_pos">
								<div class="c_login_title">后台登陆</div>
								<div class="w_h_20"></div>

								<form>
									用户名： <input type="text" class="c_login_text"
										id="zw_f_login_name" name="zw_f_login_name"
										class="input-block-level" placeholder="请输入用户名" value="">
									<div class="w_h_20"></div>
									密&nbsp;&nbsp;&nbsp;&nbsp;码： <input type="password"
										class="c_login_text" id="zw_f_login_pass"
										name="zw_f_login_pass" class="input-block-level"
										placeholder="请输入密码" value="">
									<div class="w_h_20"></div>
									<div class="w_al_center">
										<input class="btn btn-large btn-danger" type="button"
											zapweb_attr_operate_id="115793e80b38485aaba8223e0ea101b6"
											onclick="zapjs.zw.func_call(this)" value="登录"/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a>新用户注册</a>
									</div>
									<input type="hidden" id="zapjs_zw_login_sucess_target"
										name="zapjs_zw_login_sucess_target" value="../manage/home" />

								</form>
								<div class="w_h_20"></div>
								<div class="w_al_center c_login_desc">客服电话：400-005-5050
									</div>
							</div>
							<div class="c_login_version">当前系统版本：2.0.0.1</div>

						</div>

					</div>

				</div>
			</div>
		</div>



		<div class=" w_m_auto c_login_footer c_login_width">

			<div class="w_fl w_mt_15">北京慕莎科技有限公司 银杏林网 版权所有</div>
			<div class="w_fr w_mt_15">
				<ul class="w_ul">
				
					<li><a target="_blank" href="/yinfo/static-static-e27aded41fe64709a378e168c9d38b9e">注册指南</a></li>
					<li><a target="_blank" href="/yinfo/static-static-58437ccd23014d26bd09b67ddff247b9">公司介绍</a></li>
					<li><a target="_blank" href="/yinfo/static-static-b176b9a729a64132a66f66ec02844ce8">隐私协议</a></li>
					<li><a target="_blank" href="/yinfo/static-static-c364da320ff3498fbd48d55ebdf8f438">关于我们</a></li>
					<li><a target="_blank" href="/yinfo/static-static-1f53de2f4fca4145b72981601318f3fa">机构加盟</a></li>
					
				</ul>
			</div>
		</div>
	</div>


<@m_common_page_foot_base  />
