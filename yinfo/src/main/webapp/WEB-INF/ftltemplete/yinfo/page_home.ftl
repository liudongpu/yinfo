
<#assign page_obj=pageexec.upDataOne("y_info","","","","domain",pageinfo.getWebSet()["Url_View"])>



<script>
	function show_gift(aLink) {
		//$('.c_gift').hover
		$('.yold_info_box .c_gift').srnprtip({
			target : '.yold_info_giftbox',
			show : false

		});
	};

	$(function() {
		var aLink = [];
		
		<#if page_obj["send_info"]!="" >
		
			<#assign page_gift=pageexec.upDataTop("y_send","flag_use=30010001 and LOCATE(uid,'"+page_obj["send_info"]+"')>0","",10)>
			<#if page_gift??>
				<#list page_gift as e_item>
				
				aLink.push('<img src="${e_item["send_url"]}"/><br/>');
				
				
				</#list>
			</#if>
		</#if>

		if (aLink.length > 0) {

			$('.yold_info_giftbox_info').html(aLink.join(''));

			show_gift();
		}

	});
</script>



<@m_site_common_oldhead title=page_obj["name"] imgurl=page_obj["home_img"] />

	<div class="y_center">
		<div class="yinfo_main">
			<div class="b_h15"></div>
			<div class="yold_info">
				<div class="yold_info_bg">
					<div class="yold_info_box">
						<div class="yold_info_left">
							<div class="c_pic">
								<img
									/>
							</div>
							<div class="b_h10"></div>
							<div class="c_imgs">
								<div class="c_left c_prev"></div>
								<div class="c_center">
									<div class="c_over c_scroll">
										<ul>
										
											<#assign page_listimg=page_obj["list_img"]?split("|")>
										
											<#if ((page_listimg?size)>0)&&(page_listimg[0]!="")>
											
												<#list page_listimg as el>
													<li><img
													src="${el}" /></li>
												</#list>
											
											<#else>
												<li><img
												src="${page_obj["main_img"]?default("")}" /></li>
											</#if>
										
										
											
											
											
											
										</ul>
									</div>
								</div>
								<div class="c_right c_next"></div>
							</div>
							<script>
								$('.yold_info_left .c_imgs').srnprscroll({
									target : '.yold_info_left .c_pic img'
								});
							</script>

						</div>
						<div class="yold_info_right">
							<div class="c_box">
								<div class="c_top">
									<div class="c_left">
										<h2>${page_obj["name"]}</h2>
										<input type="hidden" id="yold_info_home_uid" name="yold_info_home_uid" value="${page_obj["uid"]}"/>
									</div>
									<div class="c_right">
										<div class="c_icontip"></div>
									</div>
								</div>
								<div class="c_item">
									<span>地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;区：</span>北京
									${pagemethod.upClassName("area_"+page_obj["area"])}
	
	
								</div>
								<div class="c_item">
									<span>床&nbsp;&nbsp;位&nbsp;&nbsp;数：</span>${page_obj["q_bednumber"]}
								</div>
								<div class="c_item">
									<span>收住对象：</span>
									<#list page_obj["peopletype_cid"]?split(",") as el>
										${pagemethod.upClassName(el)}
									</#list>
									
								</div>
								<div class="c_item">
									<span>机构地址：</span>${page_obj["link_address"]}<a class="c_link" href="#yinfo_home_t7">【查看地图】</a>
								</div>
								<div class="c_item">
									<span>联系电话：</span>400-005-5050
								</div>
								<div class="clearfix"></div>
								<div class="b_h20"></div>
								<div>
									<div class="c_float">
										<a class="btn btn-success"  onclick="zen.yinfo.callhome()">免费预约参观</a>
									</div>
									<div class="c_float">
										<a class="c_gift" href="#"></a>
									</div>
									<div class="c_float">
										<a class="c_collect" href="#"></a>
									</div>
								</div>
							</div>
							<div class="c_share">
								<!-- JiaThis Button BEGIN -->
								<div class="jiathis_style">
									<span class="jiathis_txt">分享到：</span>
									<a class="jiathis_button_tools_1"></a>
									<a class="jiathis_button_tools_2"></a>
									<a class="jiathis_button_tools_3"></a>
									<a class="jiathis_button_tools_4"></a>
									<a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jiathis_separator jtico jtico_jiathis" target="_blank">更多</a>
									<a class="jiathis_counter_style"></a>
								</div>
								<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js?uid=1369568754104639" charset="utf-8"></script>
								<!-- JiaThis Button END -->
							
							</div>
						</div>
						<div class="yold_info_giftbox">
							<div class="yold_info_giftbox_info"></div>
						</div>
						<div class="clearfix"></div>
						<div class="b_h20"></div>
					</div>
				</div>
			</div>
			<div class="b_h10"></div>
			<div class="yold_show">

				<div id="yinfo_home_t1" class="c_item">
					<div class="c_title">养老院简介</div>
					<div>${page_obj["field_description"]}</div>
				</div>
				<div id="yinfo_home_t2" class="c_item">
					<div class="c_title">收费标准</div>
					<div>
						<table class="table table-bordered">
							<tbody>
								<tr class="success">
									<td>项目</td>
									<td>费用</td>
									<td>项目</td>
									<td>费用</td>
								</tr>
								<tr>
									<td>单人间（元/月）</td>
									<td>${page_obj["q_money_room_one"]}</td>
									<td>双人间（元/月）</td>
									<td>${page_obj["q_money_room_two"]}</td>
								</tr>
								<tr>
									<td>三人间（元/月）</td>
									<td>${page_obj["q_money_room_three"]}</td>
									<td>多人间（元/月）</td>
									<td>${page_obj["q_money_room_more"]}</td>
								</tr>
								<tr>
									<td>一对一护理费（元/天）</td>
									<td>${page_obj["q_money_service_one"]}</td>
									<td>一对二护理费（元/天）</td>
									<td>${page_obj["q_money_service_two"]}</td>
								</tr>
								<tr>
									<td>一对多护理费（元/天）</td>
									<td>${page_obj["q_money_service_more"]}</td>
									<td>伙食费（元/月）</td>
									<td>${page_obj["q_eat_money_month"]}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div id="yinfo_home_t3" class="c_item">
					<div class="c_title">入住须知</div>
					<div>${page_obj["field_live"]}</div>
				</div>
				<div id="yinfo_home_t4" class="c_item">
					<div class="c_title">服务指南</div>
					<div>${page_obj["field_service"]}</div>
				</div>
				<div id="yinfo_home_t5" class="c_item">
					<div class="c_title">优惠信息</div>
					<div>${page_obj["field_coupon"]}</div>
				</div>
				<div id="yinfo_home_t6" class="c_item">
					<div class="c_title">联系方式</div>
					<div>联系地址：${page_obj["link_address"]}
					<br/>邮编：${page_obj["link_zipcode"]}
					<br/>固定电话：400-005-5050
					</div>
					<div>${page_obj["link_travel"]}</div>
				</div>
				<div id="yinfo_home_t7" class="c_item">
					<div class="c_title">机构位置</div>
					<div>${page_obj["link_address"]}</div>
					<div class="b_h10"></div>
					<div id="yold_show_map" class="yold_show_map"></div>
					<script type="text/javascript"
						src="http://api.map.baidu.com/api?v=1.5&ak=CA79faace408337ea7d9fa7f4addaabd">
						
					</script>
					<script type="text/javascript">
					
					
						var bSecond=true;
					
						function showbaidumap(sAddress) {
							var map = new BMap.Map("yold_show_map"); // 创建地图实例  
							// 创建地址解析器实例
							var myGeo = new BMap.Geocoder();
							// 将地址解析结果显示在地图上,并调整地图视野
							myGeo.getPoint(sAddress, function(
									point) {
								if (point) {
									map.centerAndZoom(point, 16);
									map.addOverlay(new BMap.Marker(point));

									/*
									var marker = new BMap.Marker(map.getCenter());  // 创建标注
									map.addOverlay(marker);              // 将标注添加到地图中
									marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
									 */

									var opts = {
										width : 150, // 信息窗口宽度
										height : 30, // 信息窗口高度
										title : "" // 信息窗口标题
									}
									var infoWindow = new BMap.InfoWindow(
											sAddress, opts); // 创建信息窗口对象
									map.openInfoWindow(infoWindow, map
											.getCenter()); //开启信息窗口

								}
								else
								{
									if(bSecond)
									{
										showbaidumap("${page_obj["name"]}");
										bSecond=false;
									}
								}
								
							}, "北京市");

						}
						
						
						showbaidumap("${page_obj["link_address"]}");
						$('.yold_nav').pin();
					</script>
					
				</div>
				<div class="b_h40 clearfix"></div>
			</div>
			
		</div>
	</div>

<div class="b_h40"></div>

<@m_site_common_footer />
