package com.srnpr.ylib.method;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.srnpr.ylib.data.DataTableManager;
import com.srnpr.ylib.model.MHashMap;
import com.srnpr.ylib.model.MPageNav;
import com.srnpr.zapcom.basehelper.FormatHelper;
import com.srnpr.zapcom.basemodel.MDataMap;
import com.srnpr.zapdata.dbdo.DbUp;
import com.srnpr.zapweb.helper.WebSessionHelper;
import com.srnpr.zapweb.usermodel.MUserInfo;
import com.srnpr.zapweb.webdo.WebConst;
import com.srnpr.zapweb.webdo.WebTemp;
import com.srnpr.zapweb.webfactory.UserFactory;
import com.srnpr.zapweb.webmethod.RootMethod;

public class WebMethod extends RootMethod {

	public Map<String, Object> upYinfoSignUser() {
		Map<String, Object> mUserMap = upYinfoUserInfo();

		if (mUserMap.get("info_domain") != null
				&& StringUtils.isNotEmpty(mUserMap.get("info_domain")
						.toString())) {

			Map<String, Object> mInfoMap = DataTableManager.Get("y_info")
					.upOneMap("domain", mUserMap.get("info_domain").toString());

			String sSignName = mInfoMap.get("name").toString();

			String sSignStatus = mInfoMap.get("sign_status").toString();

			mUserMap.put("sign_name", sSignName);

			if (StringUtils.isNotEmpty(sSignStatus)
					&& (sSignStatus.equals("32690002") || sSignStatus
							.equals("32690003"))) {
				sSignStatus = "1";
			} else {

				sSignStatus = "";
			}

			mUserMap.put("sign_statusinfo", sSignStatus);
		}

		return mUserMap;

	}

	public Map<String, Object> upYinfoUserInfo() {
		Map<String, Object> mReturn = null;

		HttpServletRequest hRequest = ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes()).getRequest();

		if (hRequest != null && hRequest.getCookies() != null
				&& hRequest.getCookies().length > 0) {

			for (Cookie c : hRequest.getCookies()) {
				if (c.getName().equals("yinxl_user_cookieid")) {

					mReturn = DataTableManager.Get("y_user").upOneMap(
							"cookieid", c.getValue());
					String sMangeCode = "";

					if (StringUtils.isNotBlank(mReturn.get("info_domain")
							.toString())) {
						Map<String, Object> minfo = DataTableManager.Get(
								"y_info").upOneMap("domain",
								mReturn.get("info_domain").toString());

						sMangeCode = minfo.get("uid").toString();

						mReturn.put("yinxl_user_info_uid", minfo.get("uid"));
					}

					if (!UserFactory.INSTANCE.checkUserLogin()) {
						MUserInfo mLoginUserInfo = new MUserInfo();

						mLoginUserInfo.setFlagLogin(1);
						mLoginUserInfo.setLoginName(mReturn.get("uname")
								.toString());
						mLoginUserInfo.setUserCode(mReturn.get("uid")
								.toString());
						mLoginUserInfo.setManageCode(sMangeCode);
						mLoginUserInfo.setRealName(mReturn.get("username")
								.toString());

						WebSessionHelper.create()
								.inSession(WebConst.CONST_WEB_SESSION_USER,
										mLoginUserInfo);

					}

				}
			}

		}
		return mReturn;
	}

	private static MDataMap hClassMap = new MDataMap();

	private void checkClassMap() {
		if (hClassMap == null || hClassMap.size() < 1) {

			for (Map<String, Object> map : DbUp.upTable("you_class")
					.listByWhere()) {
				hClassMap.put(map.get("code").toString(), map.get("name")
						.toString());
			}

			for (Map<String, Object> map : DbUp.upTable("y_area").listByWhere(
					"level", "3")) {
				hClassMap.put("area_" + map.get("code").toString(),
						map.get("name").toString());
			}
		}
	}

	public MDataMap upClassByFather(String sFather) {
		MDataMap mReturnHashMap = new MDataMap();
		checkClassMap();

		for (String s : hClassMap.upKeys()) {
			if (s.length() > 4 && s.startsWith(sFather)) {
				String sKey = s.toString();
				if (sKey.indexOf("_") > -1) {
					String[] sSplit = sKey.split("_");
					sKey = sSplit[sSplit.length - 1];
				}
				mReturnHashMap.put(sKey, hClassMap.get(s));
			}
		}

		return mReturnHashMap;

	}

	public String upClassName(String sCode) {
		checkClassMap();
		String sReturnString = "";
		if (hClassMap.containsKey(sCode)) {
			sReturnString = hClassMap.get(sCode).toString();
		}

		return sReturnString;

	}

	public Object upData(String sTableName, String... sArgs) {

		return DbUp.upTable(sTableName).listByWhere(sArgs);
	}

	public Object upDataTop(String sTableName, String sWhere, String sOrder,
			int iTopSize, Object... oArgs) {

		MDataMap mDataMap = new MDataMap();
		if (oArgs != null && oArgs.length > 0)
			mDataMap.inAllValues(StringUtils.join(oArgs, "&&").split("&&"));

		return DbUp.upTable(sTableName).query("", sOrder, sWhere, mDataMap, 0,
				iTopSize);

	}

	public HttpServletRequest upRequest() {
		return ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes()).getRequest();

	}

	public String upRequestParameter(String sKey) {
		String sValueString = "";

		if (upRequest().getParameter(sKey) != null) {
			sValueString = upRequest().getParameter(sKey).toString();
		}

		return sValueString;
	}

	public MPageNav upPageNavQuery(String sTableName, String sFields,
			String sWhere, String sOrder, Object... oArgs) {
		MPageNav mPageNav = new MPageNav();

		if (StringUtils.isNotEmpty(upRequest().getParameter("z_page_index"))) {
			mPageNav.setPageIndex(Integer.valueOf(upRequest().getParameter(
					"z_page_index").toString()));
		}
		if (StringUtils.isNotEmpty(upRequest().getParameter("z_page_count"))) {
			mPageNav.setPageCount(Integer.valueOf(upRequest().getParameter(
					"z_page_count").toString()));
		}
		if (StringUtils.isNotEmpty(upRequest().getParameter("z_page_size"))) {
			mPageNav.setPageSize(Integer.valueOf(upRequest().getParameter(
					"z_page_size").toString()));
		}

		MDataMap mDataMap = new MDataMap();
		if (oArgs != null && oArgs.length > 0)
			mDataMap.inAllValues(StringUtils.join(oArgs, "&&").split("&&"));
		if (mPageNav.getPageCount() < 0) {

			mPageNav.setPageCount(DbUp.upTable(sTableName).dataCount(sWhere,
					mDataMap));
		}

		mPageNav.setPageData(DbUp.upTable(sTableName).query(sFields, sOrder,
				sWhere, mDataMap,
				(mPageNav.getPageIndex() - 1) * mPageNav.getPageSize(),
				mPageNav.getPageSize()));

		return mPageNav;
	}

	public MPageNav upListPage(String sUrl, String sSearch) {

		MHashMap mHashMap = new MHashMap();

		String[] sUrlStrings = upUrlList(sUrl);

		String[] sKeysStrings = new String[] { "area", "money_cid",
				"peopletype_cid" };

		ArrayList<String> aWhere = new ArrayList<String>();

		String sWhereString = "";

		for (int i = 0, j = sKeysStrings.length; i < j; i++) {
			if (StringUtils.isNotEmpty(sUrlStrings[i])
					&& !sUrlStrings[i].trim().equals("0")) {
				aWhere.add(sKeysStrings[i] + " like :" + sKeysStrings[i] + " ");

				mHashMap.put(sKeysStrings[i], "%" + sUrlStrings[i].trim() + "%");

			}
		}

		if (sUrlStrings.length >= 5) {
			if (sUrlStrings[4].equals("32700001")) {
				aWhere.add(" main_img!='' ");
			} else if (sUrlStrings[4].equals("32700002")) {
				aWhere.add(" main_img='' ");
			}
		}

		// 搜索
		if (StringUtils.isNotEmpty(sSearch)) {
			aWhere.add(" ( name like :key ) ");

			mHashMap.put("key", "%" + sSearch + "%");
		}

		aWhere.add(" show_flag=30010001 ");

		// 区域判断
		String sAreaCode = upAreaCode();
		if (StringUtils.isNotEmpty(sAreaCode)) {
			aWhere.add(" left(area," + sAreaCode.length() + ")=:areacode ");
			mHashMap.put("areacode", sAreaCode);

		}

		sWhereString = StringUtils.join(aWhere, " and ");

		return upPageNavQuery("y_info", "", sWhereString, "-repay_money,-zid",
				mHashMap.upObjs());

	}

	private String[] upUrlList(String sUrl) {
		int iNowSize = StringUtils.countMatches(sUrl, "_");
		for (int i = 0; i < 4 - iNowSize; i++) {
			sUrl = sUrl + "_0";
		}

		String[] sUrlStrings = sUrl.split("_");
		return sUrlStrings;
	}

	public String upListLink(String sUrl, String sTitle, String sSource,
			int iNow) {

		String[] sUrlStrings = upUrlList(sUrl);

		String sNnowKey = sUrlStrings[iNow];

		StringBuffer sBuffer = new StringBuffer();

		MDataMap mSourceHashMap = upClassByFather(sSource);
		mSourceHashMap.put("0", sTitle);

		Set<String> keySet = mSourceHashMap.keySet();

		String[] sTemps = mSourceHashMap.upKeys().toArray(new String[] {});
		Arrays.sort(sTemps);

		for (String s : sTemps) {
			sUrlStrings[iNow] = s;

			sBuffer.append("<a "
					+ (sNnowKey.equals(s) ? "class=\"c_active\" " : "")
					+ " href=\"/yinfo/list-"
					+ StringUtils.join(sUrlStrings, "_") + ".html\">"
					+ mSourceHashMap.get(s).toString() + "</a>");

		}

		return sBuffer.toString();
	}

	public String upDiffContent(String sCode) {

		StringBuffer sBuffer = new StringBuffer();

		List<MDataMap> lMaps = DbUp.upTable("y_info").queryIn("", "", "",
				new MDataMap(), 0, 0, "zid", sCode.replace("_", ","));

		int iLength = lMaps.size();
		int iStep = 0;

		String sWidthString = " style=\"width:"
				+ String.valueOf((int) (750 / iLength)) + "px;\" ";

		for (MDataMap mFieldDataMap : DbUp.upTable("zw_field").queryAll("",
				"sort_book", "view_code='v_y_info' and sort_book>0",
				new MDataMap())) {

			long lFieldType = -1;

			lFieldType = Long.parseLong(mFieldDataMap.get("field_type_aid"));

			if (lFieldType > -1) {

				sBuffer.append("<tr>");

				sBuffer.append("<td class=\"diff_title\">"
						+ mFieldDataMap.get("field_note") + "</td>");

				for (MDataMap mInfoMap : lMaps) {

					String sTextString = "";

					if (lFieldType == 104005009) {

						sTextString = mInfoMap.get(mFieldDataMap
								.get("column_name"));
					}
					if (lFieldType == 104005103 || lFieldType == 104005019) {

						String[] sValues = mInfoMap.get(
								mFieldDataMap.get("column_name")).split(",");
						if (sValues != null && sValues.length > 0) {
							MDataMap mSourceSet = WebTemp
									.upTempDataMap("zw_source", "",
											"source_code",
											mFieldDataMap.get("source_code")
													.toString());

							List<String> lShowTextList = new ArrayList<String>();

							for (String s : sValues) {
								String sText = WebTemp.upTempDataOne(
										mSourceSet.get("source_from"),
										mSourceSet.get("field_text"),
										mSourceSet.get("field_value"), s);
								lShowTextList.add(sText);
							}

							sTextString = StringUtils.join(lShowTextList, ",");

						}

					}

					sBuffer.append("<td" + (iStep == 0 ? sWidthString : "")
							+ ">" + sTextString + "</td>");

				}

				sBuffer.append("</tr>");
			}

			iStep++;

		}

		// pExec.upDataOneQuery("y_info", "", );

		return sBuffer.toString();

	}

	/**
	 * 获取地区列表
	 * 
	 * @param sType
	 * @return
	 */
	public List<MDataMap> upAreaList(String sType) {

		String sAreaCode = upAreaCode();
		MDataMap mDataMap = new MDataMap();
		mDataMap.inAllValues("areacode", sAreaCode);

		String sWhere = "level=3 and left(code," + sAreaCode.length()
				+ ")=:areacode";

		List<MDataMap> listMap = null;
		if (sType.equals("nav-menu")) {
			listMap = DbUp.upTable("y_area").query("code,name", "-sort",
					sWhere, mDataMap, 0, 6);
		} else if (sType.equals("nav-more")) {
			listMap = DbUp.upTable("y_area").query("code,name", "-sort",
					sWhere, mDataMap, 6, 99);
		} else if (sType.equals("nav-left")) {

			listMap = DbUp.upTable("y_area").query("code,name", "-sort",
					sWhere, mDataMap, 0, 4);
		}

		return listMap;

	}

	public String upAreaCode() {
		String sReturn = "11";

		String sAreaString = upRequest().getServerName();

		if (sAreaString.startsWith("area-")) {
			String sAreaCode = StringUtils.substringAfter(
					StringUtils.substringBefore(sAreaString, "."), "area-");

			if (StringUtils.isNumeric(sAreaCode)) {
				sReturn = sAreaCode;
			}
		}

		return sReturn;

	}

	/**
	 * 获取区域名称
	 * 
	 * @return
	 */
	public String upAreaName() {

		String sAreaCode = upAreaCode();

		String sAreaName = WebTemp.upTempDataOne("y_area", "name", "startcode",
				sAreaCode);

		return sAreaName;

	}

	/**
	 * 获取列表数据
	 * @param sAreaType
	 * @return
	 */
	public Object upListInfo(String sAreaType) {

		MDataMap mDataMap = new MDataMap();

		String sWhere = " show_flag=30010001 ";

		String sOrder = "-repay_money,-zid";

		// 区域判断
		String sAreaCode = upAreaCode();
		if (StringUtils.isNotEmpty(sAreaCode)) {
			sWhere = sWhere
					+ (" and left(area," + sAreaCode.length() + ")=:areacode ");
			mDataMap.put("areacode", sAreaCode);

		}

		if (sAreaType.equals("hot")) {
			sWhere = sWhere + " and adv_cid=32660004 ";
		} else if (sAreaType.equals("mark")) {
			sWhere = sWhere + " and adv_cid=32660002 ";
		} else if (sAreaType.equals("new")) {
			sWhere = sWhere + " and adv_cid=32660003 ";

			sOrder = "-zid";
		}
		else if (sAreaType.equals("last")) {
			
			sOrder = "-zid";
		}

		return DbUp.upTable("y_info").query("", sOrder, sWhere, mDataMap, 0, 6);

	}

}
