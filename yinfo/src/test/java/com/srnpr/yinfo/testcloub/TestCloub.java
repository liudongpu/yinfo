package com.srnpr.yinfo.testcloub;

import static org.junit.Assert.*;

import org.junit.Test;

import com.srnpr.yinfo.cloubsave.CloubSave;

public class TestCloub {

	@Test
	public void test() {
		
		
		
		CloubSave cloubSave=new CloubSave();
		
		cloubSave.uploadDir("/Users/srnpr/git/yinfo/yinfo/src/main/webapp/resources/","/resources/");
		
	}

}
