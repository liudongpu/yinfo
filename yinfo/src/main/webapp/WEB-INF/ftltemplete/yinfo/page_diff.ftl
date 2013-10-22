

<@m_site_common_header />

	<div class="y_center">
		<div class="yinfo_diff">
			<div class="yinfo_diff_box">
				<table  class="table table-bordered">
				<caption>基本信息对比</caption>				
					<tbody>
						<tr>
							<th>项目</th>
							<td>aaa</td>
							<td>bbb</td>
							<td>ccc</td>
							<td>ddd</td>
						</tr>
						
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

