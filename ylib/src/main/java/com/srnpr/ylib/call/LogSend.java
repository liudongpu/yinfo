package com.srnpr.ylib.call;

import org.apache.commons.lang.StringUtils;

import com.srnpr.ylib.data.DataTableManager;
import com.srnpr.ylib.data.TableSupport;
import com.srnpr.ylib.model.MHashMap;
import com.srnpr.zapcom.baseclass.BaseClass;
import com.srnpr.zapcom.basehelper.FormatHelper;
import com.srnpr.zapweb.helper.WebHelper;



public class LogSend extends BaseClass {

	
	
	public void addLog(int lLogId,String...  sContents)
	{
		
		 TableSupport tSupport= DataTableManager.Get("y_log");
		 
		MHashMap mHashMap=new MHashMap();
		
		mHashMap.put("uid",WebHelper.upUuid());
		mHashMap.put("type_logid",String.valueOf(lLogId));
		mHashMap.put("typedesc", bInfo(lLogId));
		
		mHashMap.put("createtime", FormatHelper.upDateTime());
		mHashMap.put("content", StringUtils.join(sContents,"    "));
		 
		 
		 tSupport.inPut(mHashMap);

	}
	
	
	
}
