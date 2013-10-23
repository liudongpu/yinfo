
package com.srnpr.ylib.model;

import java.util.Map;



public class MWebPage
{

	
	private PageRequest req=new PageRequest();
	
	
	
	 /**
	 * @fields pageType
	 */
		
	private String	pageType	= "";

	public String getPageType()
	{

		return pageType;
	}

	public void setPageType(String pageType)
	{

		this.pageType = pageType;
	}

	public Object getPageData()
	{

		return pageData;
	}

	public void setPageData(Object pageData)
	{

		this.pageData = pageData;
	}

	public String getPageInclude()
	{

		return pageInclude;
	}

	public void setPageInclude(String pageInclude)
	{

		this.pageInclude = pageInclude;
	}

	public Object getPageOptions()
	{

		return pageOptions;
	}

	public void setPageOptions(Object pageOptions)
	{

		this.pageOptions = pageOptions;
	}

	
	


	public PageRequest getReq()
	{

		return req;
	}

	public void setReq(PageRequest req)
	{

		this.req = req;
	}



	private Object pageQuery;




	public Map<String, String> getWebSet()
	{

		return webSet;
	}

	public void setWebSet(Map<String, String> webSet)
	{

		this.webSet = webSet;
	}
































	public Object getPageQuery() {
		return pageQuery;
	}

	public void setPageQuery(Object pageQuery) {
		this.pageQuery = pageQuery;
	}



	/**
	 * @fields pageData
	 */
		
	private Object	pageData;

	
	 /**
	 * @fields pageOptions
	 */
		
	private Object	pageOptions;

	
	 /**
	 * @fields pageInclude
	 */
		
	private String	pageInclude	= "";
	
	
	
	private Map<String, String> webSet;
	
	
	
	

}
