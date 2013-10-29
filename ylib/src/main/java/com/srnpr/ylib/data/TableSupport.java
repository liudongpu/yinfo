package com.srnpr.ylib.data;

import java.util.Map;

import com.srnpr.ylib.model.MHashMap;
import com.srnpr.zapdata.dbface.ITableCall;
import com.srnpr.zapdata.dbsupport.DbTemplate;
import com.srnpr.zapdata.dbsupport.MysqlCall;

public class TableSupport extends MysqlCall implements ITableCall {

	public TableSupport(DbTemplate dBase, String sTableName) {
		super(dBase, sTableName);
		
	}
	
	
	public int upCount(String... spStrings)
	{
		return count(spStrings);
	}
	
	
	public void inPut(MHashMap map)
	{
		
		dataInsert(map.toDataMap());
	}
	
	public Map<String, Object> upOneMap(String...strings )
	{
		
		return new MHashMap().froDataMap( one(strings));
	}
	
	public void inPost(MHashMap map,String sField)
	{
		dataUpdate(map.toDataMap(), "", sField);
	}
	

}
