package com.srnpr.ylib.method;

import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.srnpr.zapcom.basemodel.MDataMap;
import com.srnpr.zapdata.dbdo.DbUp;
import com.srnpr.zapweb.webmethod.RootMethod;

public class WebMethod extends RootMethod {

	private static MDataMap hClassMap = new MDataMap();

	private void checkClassMap() {
		if (hClassMap == null || hClassMap.size() < 1) {
			
			

			for (Map<String, Object> map : DbUp.upTable("you_class").listByWhere()) {
				hClassMap.put(map.get("code").toString(), map.get("name")
						.toString());
			}

			for (Map<String, Object> map : DbUp.upTable("y_area").listByWhere("level", "3")) {
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
		mDataMap.inAllValues(StringUtils.join(oArgs, "&&").split("&&"));

		return DbUp.upTable(sTableName).query("", sOrder, sWhere, mDataMap, 0,
				iTopSize);

	}

}
