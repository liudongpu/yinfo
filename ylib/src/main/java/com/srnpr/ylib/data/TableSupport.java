package com.srnpr.ylib.data;

import java.util.Map;

import com.srnpr.ylib.model.MHashMap;
import com.srnpr.zapdata.dbdo.DbUp;
import com.srnpr.zapdata.dbface.ITableCall;
import com.srnpr.zapdata.dbsupport.DbTemplate;
import com.srnpr.zapdata.dbsupport.MysqlCall;

public class TableSupport {

	private ITableCall iTableCall=null;
	
	
	public TableSupport(String sTableName) {
		iTableCall=DbUp.upTable(sTableName);
		
	}
	
	
	
	public int upCount(String... spStrings)
	{
		return iTableCall.count(spStrings);
	}
	
	
	public void inPut(MHashMap map)
	{
		
		iTableCall.dataInsert(map.toDataMap());
	}
	
	public Map<String, Object> upOneMap(String...strings )
	{
		
		return new MHashMap().froDataMap( iTableCall.one(strings));
	}
	
	public void inPost(MHashMap map,String sField)
	{
		iTableCall.dataUpdate(map.toDataMap(), "", sField);
	}
	

}
