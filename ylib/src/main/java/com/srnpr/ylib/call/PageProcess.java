package com.srnpr.ylib.call;

import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.srnpr.ylib.data.DataTableManager;
import com.srnpr.ylib.model.MResult;
import com.srnpr.ylib.model.PageRequest;
import com.srnpr.zapweb.helper.WebSessionHelper;
import com.srnpr.zapweb.usermodel.MUserInfo;
import com.srnpr.zapweb.webdo.WebConst;
import com.srnpr.zapweb.webfactory.UserFactory;






public class PageProcess  {

	
	
	
	
	public PageRequest processPage(PageRequest wRequest)
	{
		
		if (wRequest.upSet("Url_View").equals("user")) {
			
			
			String sTargetString = wRequest.upSet("Url_Target");
			

			Map<String, Object> mUserMap = upUserInfo();

			if (mUserMap != null && mUserMap.size() > 0) {
				wRequest.setPageOptions(mUserMap);
			} else {
				wRequest.setPageInclude("uaccess");

			}
			
			
			if (sTargetString.equals("usign")) {

				if (mUserMap.get("info_domain") != null
						&& StringUtils.isNotEmpty(mUserMap.get("info_domain")
								.toString())) {
					
					Map<String, Object> mInfoMap=DataTableManager.Get("y_info").upOneMap("domain",mUserMap.get("info_domain")
							.toString());
					
					
					String sSignName=mInfoMap.get("name").toString();
					
					
					String sSignStatus=mInfoMap.get("sign_status").toString();
					
					mUserMap.put("sign_name",
							sSignName);
					
					
					if(StringUtils.isNotEmpty(sSignStatus)&&(sSignStatus.equals("32690002")||sSignStatus.equals("32690003")))
					{
						sSignStatus="1";
					}
					else {
						
						sSignStatus="";
					}
					
					mUserMap.put("sign_statusinfo",
							sSignStatus);
					
					wRequest.setPageOptions(mUserMap);
					
				}
				else
				{
					wRequest.setPageInclude("uaccess");
				}
			}
			
			

			

		}
		
		
		
		return wRequest;
		
	}
	
	
	
	
	
	public MResult result(PageRequest pRequest) {
		MResult mResult = new MResult();

		String sView = String.valueOf(pRequest.upSet("Url_View"));

		if (sView.equals("reg")) {
			mResult = new UserCall(pRequest).callReg();

		} else if (sView.equals("login")) {
			mResult = new UserCall(pRequest).callLogin();

		} else {
			
			Map<String, Object> mUserMap = upUserInfo();

			if (mUserMap != null && mUserMap.size() > 0) {
				
			
			
			
			
			if (sView.equals("changeinfo")) {
				mResult = new UserCall(pRequest).callChangeInfo();
			} else if (sView.equals("changepass")) {
				mResult = new UserCall(pRequest).callChangePass(upUserInfo());
			} else if (sView.equals("postphone")) {
				mResult = new UserCall(pRequest).callPostPhone(upUserInfo());
			} else if (sView.equals("postcall")) {
				mResult = new UserCall(pRequest).callPostCall(upUserInfo());
			} else if (sView.equals("usersign")) {
				mResult = new UserCall(pRequest).callUserSign(upUserInfo());
			} else if (sView.equals("v_y_info")) {
				//mResult = new WebBaseProcess().showResult(pRequest);
			}
			} else {
				mResult.error(965901007);

			}
		}

		return mResult;
	}
	
	private Map<String, Object> upUserInfo() {
		Map<String, Object> mReturn = null;

		HttpServletRequest hRequest = ((ServletRequestAttributes) RequestContextHolder
				.getRequestAttributes()).getRequest();

		if (hRequest != null && hRequest.getCookies() != null
				&& hRequest.getCookies().length > 0) {

			for (Cookie c : hRequest.getCookies()) {
				if (c.getName().equals("yinxl_user_cookieid")) {

					mReturn = DataTableManager.Get("y_user").upOneMap(
							"cookieid", c.getValue());
					String sMangeCode="";
					
					if (StringUtils.isNotBlank( mReturn.get("info_domain").toString()))
					{
						Map<String, Object> minfo= DataTableManager.Get("y_info").upOneMap("domain",mReturn.get("info_domain").toString());
						
						sMangeCode=minfo.get("uid").toString();
						
						mReturn.put("yinxl_user_info_uid", minfo.get("uid"));
					}
					
					
					if(!UserFactory.INSTANCE.checkUserLogin())
					{
						MUserInfo mLoginUserInfo=new MUserInfo();
						
						mLoginUserInfo.setFlagLogin(1);
						mLoginUserInfo.setLoginName(mReturn.get("uname").toString());
						mLoginUserInfo.setUserCode(mReturn.get("uid").toString());
						mLoginUserInfo.setManageCode(sMangeCode);
						mLoginUserInfo.setRealName(mReturn.get("username").toString());
						
						
						WebSessionHelper.create().inSession(
								WebConst.CONST_WEB_SESSION_USER, mLoginUserInfo);
						
					}
					
					
					
				}
			}

		}
		return mReturn;
	}
	
}
