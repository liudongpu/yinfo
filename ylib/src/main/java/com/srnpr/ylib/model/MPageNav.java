package com.srnpr.ylib.model;

import java.util.List;
import java.util.Map;

import com.srnpr.zapcom.basemodel.MDataMap;


public class MPageNav {

	
	
	
	
	private int pageCount=-1;
	
	private List<MDataMap> pageData;
	
	private int pageSize=10;
	
	private int pageIndex=1;
	

	public List<MDataMap> getPageData() {
		return pageData;
	}

	public void setPageData(List<MDataMap> pageData) {
		this.pageData = pageData;
	}

	public int getPageCount() {
		return pageCount;
	}

	public void setPageCount(int pageCount) {
		this.pageCount = pageCount;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getPageIndex() {
		return pageIndex;
	}

	public void setPageIndex(int pageIndex) {
		this.pageIndex = pageIndex;
	}
	
	
	
}
