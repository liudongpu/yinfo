package com.srnpr.ylib.model;


import com.srnpr.zapcom.basehelper.JsonHelper;
import com.srnpr.zapcom.topdo.TopUp;
import com.srnpr.zapweb.webdo.WebUp;

import freemarker.cache.MruCacheStorage;


 /**
 * @description 通用返回结果
 * @version 1.0
 * @author srnpr
 * @ClassName: MResult
 * @update 2013-4-19 下午10:17:19
 */
	
public class MResult
{

	
	
	
	
	 /**
	 * @fields flag  返回结果
	 */
		
	private boolean flag=true;
	
	
	 /**
	 * @fields message  执行消息
	 */
		
	private String message="";
	
	
	 /**
	 * @fields result 返回结果内容
	 */
		
	private Object result;
	
	
	 /**
	 * @fields code  返回结果标识码  如果失败会返回失败编码
	 */
		
	private int code=1;
	
	
	
	/**
	 * @fields Object  执行内容  特殊执行某些内容时指定
	 */
	private Object run;
	
	
	
	public void error(int iInfoId,String... sParams)
	{
		
		flag=false;
		info(iInfoId,sParams);
		
	}
	
	
	public void info(int iInfoId,String... sParams)
	{
		setCode(iInfoId);
		setMessage(TopUp.upLogInfo(iInfoId,sParams));
	}
	
	
	

	public boolean getFlag()
	{
	
		return flag;
	}

	public void setFlag(boolean flag)
	{
	
		this.flag = flag;
	}

	

	

	public Object getResult()
	{
	
		return result;
	}

	public void setResult(Object result)
	{
	
		this.result = result;
	}




	



	

	
	
	
	public String ToJsonString()
	{
		return new JsonHelper<MResult>().ObjToString(this);
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public int getCode() {
		return code;
	}


	public void setCode(int code) {
		this.code = code;
	}


	public Object getRun() {
		return run;
	}


	public void setRun(Object run) {
		this.run = run;
	}


	
	
	
	
	
	
	
	
}
