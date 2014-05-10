package com.srnpr.ylib.ylibompanent;

import java.util.ArrayList;
import java.util.List;

import com.srnpr.zapcom.basemodel.MDataMap;
import com.srnpr.zapdata.dbdo.DbUp;
import com.srnpr.zapweb.webcomponent.RootSimpleComponent;
import com.srnpr.zapweb.webmodel.MWebField;
import com.srnpr.zapweb.webmodel.MWebResult;

public class AreaCompanent extends RootSimpleComponent {

	@Override
	public String upText(MWebField mWebField, MDataMap mDataMap, int iType) {
		// TODO Auto-generated method stub
		
		List<MDataMap> listArea=DbUp.upTable("y_area").queryByWhere();
		
		
		
		
		
		
		
		
		return null;
	}
	
	
	
	
	
	
	
	

	@Override
	public MWebResult inDo(MWebField mWebField, MDataMap mDataMap, int iType) {
		// TODO Auto-generated method stub
		return null;
	}

}
