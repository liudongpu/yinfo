

<@m_site_common_header />

	<style>
	td
	{
		word-wrap: break-word;
		word-break:break-all;
	}
	.diff_title
	{
		width:120px;
		background-color:#fafafa;
	}
	
	</style>
	<div class="y_center">
		<div class="yinfo_diff">
			<div class="yinfo_diff_box">
				<table  class="table table-bordered" style="width:900px;word-wrap: break-word;table-layout：fixed;">
				<caption>养老院基本信息对比</caption>				
					<tbody>
						
						
						${pagemethod.upDiffContent(pageinfo.getWebSet()["Url_View"]?default(""))}
						
					</tbody>
				</table>
				<div class="clearfix"></div>
			</div>
		</div>
	</div>

	<script>
		$(document).ready(function() {
			zen.yinfo.headernav(false);
		});
	</script>

<@m_site_common_footer />

