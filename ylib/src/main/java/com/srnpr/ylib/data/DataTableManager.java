package com.srnpr.ylib.data;

import com.srnpr.zapdata.dbdo.DbUp;
import com.srnpr.zapdata.dbface.ITableCall;

public class DataTableManager {

	
	
	
	public static TableSupport Get(String sTaleName)
	{
		
		return new TableSupport(sTaleName);
		
	}
	
	
}
