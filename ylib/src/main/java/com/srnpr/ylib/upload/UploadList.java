package com.srnpr.ylib.upload;

import com.srnpr.zapcom.baseclass.BaseClass;
import com.srnpr.zapcom.basehelper.FormatHelper;
import com.srnpr.zapcom.basesupport.ImageSupport;
import com.srnpr.zapweb.helper.WebHelper;
import com.srnpr.zapweb.webface.IWebInput;
import com.srnpr.zapweb.webface.IWebNotice;
import com.srnpr.zapweb.webmethod.WebUpload;
import com.srnpr.zapweb.webmodel.MWebResult;
import com.srnpr.zapweb.webmodel.MWebUpload;

public class UploadList extends BaseClass implements IWebNotice  {

	public MWebResult noticeEvent(String sEventName, IWebInput input) {
		MWebResult mResult = new MWebResult();

		boolean bFlagTrue = true;

		if (sEventName.equals("upload_process")) {
			MWebUpload mUpload = (MWebUpload) input;

			WebUpload webUpload = new WebUpload();

			ImageSupport imageSupport = new ImageSupport(mUpload.getFile()
					.get());

			
			/*
			if (mResult.upFlagTrue()) {
				if (imageSupport.upSourceHeight() < 500
						|| imageSupport.upSourceWidth() < 500) {
					mResult.inErrorMessage(969905060, "500", "500");
				}
			}
			*/
			
			if (mResult.upFlagTrue()) {

				

				String sTarget = mUpload.getTarget();
				String sDate = FormatHelper.upDateHex();

				String sFileName =  WebHelper.upUuid();

				MWebResult mSourceResult = webUpload.remoteUploadCustom(mUpload
						.getFile().getName(), mUpload.getFile().get(), sTarget,
						sDate, "ps", sFileName);

				// mResult.setResultList(new ArrayList<Object>());

				if (mSourceResult.upFlagTrue()) {

					imageSupport.scaleWhite(800, 600);

					MWebResult mBigFile = webUpload.remoteUploadCustom(mUpload
							.getFile().getName(), imageSupport.upTargetByte(),
							sTarget, sDate, "p0", sFileName);
					if (mBigFile.upFlagTrue()) {

						mResult.setResultObject(mBigFile.getResultObject());
						
						//此地将留白后的图片重新设置为源
						//imageSupport.setSourceImage(imageSupport.getTargetImage());
						

						//imageSupport.scaleWhite(350, 350);

						

							

						

					}

				}
			}

			if (!bFlagTrue) {

				mResult.inErrorMessage(969905006);

			}

		}

		return mResult;
	}

}
