package com.srnpr.ylib.ylibompanent;

import java.util.ArrayList;
import java.util.List;

public class Tree {

	private String id="";
	
	private String text="";
	
	private List<Tree> children=new ArrayList<Tree>();

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public List<Tree> getChildren() {
		return children;
	}

	public void setChildren(List<Tree> children) {
		this.children = children;
	}
	
}
