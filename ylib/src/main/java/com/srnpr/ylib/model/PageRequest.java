package com.srnpr.ylib.model;

import java.util.Enumeration;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import com.srnpr.zapcom.basemodel.MDataMap;



public class PageRequest {
	
	private int didPageType=0;
	
	
	
	
	 /**
	 * @fields reqMap 输入参数
	 */
	private MDataMap reqMap=new MDataMap();
	
	private MDataMap paramsMap=new MDataMap();
	
	

	public MDataMap getReqMap() {
		return reqMap;
	}


	public void setReqMap(MDataMap reqMap) {
		this.reqMap = reqMap;
	}


	public PageRequest(MDataMap hRequest)
	{
		reqMap=hRequest;

	}
	
	
	
	private MDataMap setMap=new MDataMap();
	
	public String upSet(String eKey)
	{
		return setMap.get(eKey);
	}
	
	
	
	public MDataMap getWebSet()
	{
		return setMap;
	}
	


	public String inSet(String eKey,String sValue)
	{
		return setMap.put(eKey,sValue);
	}


	public PageRequest()
	{

	}


	public Boolean isContainsRequestParam(String sName)
	{
		return reqMap!=null&&reqMap.containsKey(sName);
	}


	public String upRequestParam(String sName)
	{
		return (String)reqMap.get(sName);

	}







	public int getDidPageType() {
		return didPageType;
	}


	public void setDidPageType(int didPageType) {
		this.didPageType = didPageType;
	}


	public MDataMap getParamsMap() {
		return paramsMap;
	}


	public void setParamsMap(MDataMap paramsMap) {
		this.paramsMap = paramsMap;
	}
	

}
