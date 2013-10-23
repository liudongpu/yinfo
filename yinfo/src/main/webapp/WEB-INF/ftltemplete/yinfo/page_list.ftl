

<@m_site_common_header />

<#assign  pageListSearch=pageinfo.getWebSet()["Url_Option"]?default("")  >
<#assign  pageSearchNav=pagemethod.upListPage(pageinfo.getWebSet()["Url_View"]?default(""),pageListSearch)  >


	<div class="y_center">
		<div class="yinfo_list">
			<#if (pageListSearch=="")>
				<div class="yinfo_list_fox">
					<div class="yinfo_list_nav">
						<a href="/">回到首页</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="${base_url}yinfo/list-0">列表页</a>
					</div>
					<div class="yinfo_list_query">
		
						<div class="c_item">
							<div class="c_left">
							<span>所在区域：</span></div> <div class="c_right">
							
							<@m_page_list_query title="不限" source="area_11" now=0/></div>
							<div class="clearfix"></div>
							
							
						</div>
						<div class="c_item">
							<div class="c_left">
							<span>价格范围：</span></div> <div class="c_right">
							<@m_page_list_query title="不限" source="3251" now=1/>
							</div>
							<div class="clearfix"></div>
						</div>
						<div class="c_item">
							<div class="c_left">
							<span>老人情况：</span></div> <div class="c_right"> 
							<@m_page_list_query title="不限" source="3252" now=2/>
							</div>
							<div class="clearfix"></div>
						</div>
						
						<div class="c_order">
							<span>排序方式：</span>
							<@m_page_list_query title="默认" source="3260" now=3/>
						</div>
					</div>
					<div class="b_h20"></div>
				</div>
			<#else>
				<div class="yinfo_list_search">
					<div class="yinfo_list_nav">
						<a href="${base_url}">回到首页</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="">养老机构搜索</a>
					</div>
					<div class="yinfo_list_search_nav">
						<span class="c_blue">您搜索的是
							<span class="c_red">${pageListSearch}</span>
							共有
							<span class="c_red">${pageSearchNav.getPageCount()}</span>
							家养老院符合您的要求
						</span>
						<span class="c_hot"><b>热门搜索：</b></span>
						<a href="${base_url}yinfo/list-0_0_0_0-昌平 养老院">昌平 养老院</a>
						<a href="${base_url}yinfo/list-0_0_0_0-特护">特护</a>
						<a href="${base_url}yinfo/list-0_0_0_0-全护理老人">全护理老人</a>
						<a href="${base_url}yinfo/list-0_0_0_0-海淀">海淀</a>
						<a href="${base_url}yinfo/list-0_0_0_0-机构中心">机构中心</a>
						<a href="${base_url}yinfo/list-0_0_0_0-优惠">优惠</a>
					</div>
				</div>
				<script>
					$(document).ready(function() {
						zen.yinfo.searchtext('${pageListSearch}');
					});
				</script>	
			</#if>
			<div>
			
				
				

				<div class="yinfo_list_left">
					<#list pageSearchNav.getPageData() as el> 
					<div class="c_item">
							<@m_site_common_site_list el "list"/>
					</div>
					</#list>
					
					
					<div class="clearfix"></div>
					<div class="yinfo_list_pagintion">
					<@m_site_common_site_nav pageSearchNav />
					</div>
				</div>
				<div class="yinfo_list_right">
					<div class="c_item">
					<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=508681688&amp;site=qq&amp;menu=yes">
						<img
							src="/zzero/web/themes/webyinfo/images/service_pic.gif" />
					</a>
						
					</div>
					<div class="c_item">
						<div class="yinfo_list_newst">
							<h4>最新加入的养老院</h4>
							
							<#list pageexec.upDataTop("y_info","","-zid",8) as el>
							
							<#if (el_index==0)>
							
							<div class="c_top">
								<a href="home-${el["domain"]}">
									<div class="c_topimg">
										<img
											src="${el["main_img"]}" />
									</div>
									<div class="c_toptext">
										<b>${el["name"]}</b> <br />床位数：${el["q_bednumber"]}
									</div>
								</a>
							</div>
							<div class="clearfix"></div>
							<div class="b_h10"></div>
							<ul>
							<#else>
								<li><a href="home-${el["domain"]}">${el_index+1}、${el["name"]}</a></li>
							</#if>
							</#list>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
	</div>









	<script>
		$(document).ready(function() {
			zen.yinfo.headernav(false);
		});
	</script>



<@m_site_common_footer />

<#macro m_page_list_query  title="不限" source="area_11" now=0 >
	
	${pagemethod.upListLink(pageinfo.getWebSet()["Url_View"]?default(""),title,source,now)}
</#macro>
<@m_site_common_compare />
