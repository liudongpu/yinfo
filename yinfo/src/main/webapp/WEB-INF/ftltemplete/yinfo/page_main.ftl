

<@m_site_common_header />

	<div class="y_center">
		<div class="yinfo_main">
			<div class="index_center">
				<div class="index_adv">
					<div id="myCarousel" class="carousel slide">
						<#assign page_main_listadv=pageexec.upData("y_adv","position_cid","32620001")>
					
						<ol class="carousel-indicators">
							<#list page_main_listadv as el>
							<li data-target="#myCarousel" data-slide-to="${el_index}" class="<#if el_index==0>active</#if>"></li>
							</#list>
						</ol>
						<div class="carousel-inner">
						
							<#list page_main_listadv as el>
							
							<div class="item <#if el_index==0>active</#if>">
								<img
									src="${el["file_url"]}"
									alt="">
								<div class="carousel-caption">
									<p>
										<a href="${el["link_url"]}">${el["name"]}</a>
									</p>
								</div>
							</div>
							</#list>
						
							
						</div>
						<a class="left carousel-control b_none" href="#myCarousel"
							data-slide="prev">‹</a> <a class="right carousel-control b_none"
							href="#myCarousel" data-slide="next">›</a>
					</div>
				</div>
				<div class="b_h10"></div>
				<div class="index_todo"></div>
			</div>

			<div class="clearfix"></div>
			<div>
				<h3>本周热门</h3>
			</div>
			<div class="index_list">
				<div class="c_box">
					<#list pageexec.upDataTop("y_info","","-repay_money,-zid",6,"show_flag","30010001","adv_cid","32660004") as el>
						<div class="c_item <#if (el_index%3==0)>c_first</#if>">
							<@m_site_common_site_list el "main"/>
						</div>					
					</#list>									
				</div>
			</div>
			
			<div class="clearfix"></div>
			<div>
				<h3>最新活动</h3>
			</div>
			<div class="index_list">
				<div class="c_box">
					<#list pageexec.upDataTop("y_info","","-repay_money,-zid",6,"show_flag","30010001","adv_cid","32660002") as el>
						<div class="c_item <#if (el_index%3==0)>c_first</#if>">
							<@m_site_common_site_list el "main"/>
						</div>					
					</#list>									
				</div>
			</div>
			
			
			<div class="clearfix"></div>
			<div>
				<h3>最新入驻</h3>
			</div>
			<div class="index_list">
				<div class="c_box">
					<#list pageexec.upDataTop("y_info","","-repay_money,-zid",6,"show_flag","30010001","adv_cid","32660003") as el>
						<div class="c_item <#if (el_index%3==0)>c_first</#if>">
							<@m_site_common_site_list el "main"/>
						</div>					
					</#list>									
				</div>
			</div>
			
			
			
		</div>
	</div>







	<script>
		$(document).ready(function() {
			zen.yinfo.headernav(true);
		});

		$('.carousel').hover(function() {
			$(this).find('.carousel-control').show()
		}, function() {
			$(this).find('.carousel-control').hide()
		});

		$('.carousel').carousel({
			interval : 4000
		});
	</script>



<@m_site_common_footer />
