package com.srnpr.ylib.model;

import java.awt.List;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.concurrent.ConcurrentHashMap;

import com.srnpr.zapcom.basemodel.MDataMap;

public class MHashMap extends ConcurrentHashMap<String, Object> {

	/**
	 * @fields serialVersionUID
	 */

	private static final long serialVersionUID = 1L;

	public String[] upKeys() {
		ArrayList<String> aKeys = new ArrayList<String>();
		Enumeration<String> eKey = this.keys();

		while (eKey.hasMoreElements()) {
			aKeys.add(eKey.nextElement());

		}
		return aKeys.toArray(new String[] {});

	}

	public void inAdd(Object... oArgs) {
		for (int i = 0, j = oArgs.length; i < j; i = i + 2) {
			this.put(oArgs[i].toString(), oArgs[i + 1]);
		}
	}

	public Object[] upObjs() {

		ArrayList<Object> listReturn = new ArrayList<Object>();
		Enumeration<String> eKey = this.keys();

		while (eKey.hasMoreElements()) {

			String sKey = eKey.nextElement();
			listReturn.add(sKey);
			listReturn.add(get(sKey));

		}

		return listReturn.toArray();

	}
	
	
	public MDataMap toDataMap()
	{
		MDataMap map=new MDataMap();
		map.inAllValues((String[])this.upObjs());
		return map;
	}
	
	
	public MHashMap froDataMap(MDataMap map)
	{
		inAdd(map.upStrings());
		return this;
	}
	
	
	

}
