(function (obj) {

	//================
	var version = "0.01";
	//================

	//detect AE Version
	var reV = /^(\d+\.?\d*)/i;
	var v = app.version.match(reV);
	aeVersion = parseFloat(v[1]);
	delete reV;
	delete v;

	//myTest needs to write files
	if (app.preferences.getPrefAsLong("Main Pref Section","Pref_SCRIPTING_FILE_NETWORK_SECURITY") != 1)
	{
	alert("DuProxy needs to be allowed to write files\nPlease, check the box called 'Allow Scripts to write files...' in the general preferences of After Effects.");

	app.executeCommand(2359);

	if (app.preferences.getPrefAsLong("Main Pref Section","Pref_SCRIPTING_FILE_NETWORK_SECURITY") != 1)
	{
	return;
	}
	}


	function myTestUI(thisObj)
	{

		// ============ IMAGES =============
		{

			function checkFile(name, content)
			{
			var file = new File(name);
			var fileContent = "";
			if (file.exists)
			{
			file.encoding = "BINARY";
			if (file.open("r", "TEXT", "????"))
			{
			fileContent = file.read();

			file.close();
			}
			}
			else
			{
			var folder = new Folder(file.path);
			if (!folder.exists)
			{
			folder.create();
			}
			}
			var success = fileContent == content;
			if (!success)
			{
			file.encoding = "BINARY";
			if (file.open("w"))
			{
			success = file.write(content);

			file.close();
			}
			}
			return success;
			}

				var scriptMng = new Object();
				scriptMng.files = new Object();
				scriptMng.files["/autoFade.png"] = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x04\u00F4iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.eda2b3fac, 2021/11/17-17:23:19        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.1 (Macintosh)\" xmp:CreateDate=\"2022-02-10T13:54:20+01:00\" xmp:ModifyDate=\"2022-03-25T12:06:36+01:00\" xmp:MetadataDate=\"2022-03-25T12:06:36+01:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:b43ee422-3b91-4c58-9cda-1badd9355d65\" xmpMM:DocumentID=\"xmp.did:b43ee422-3b91-4c58-9cda-1badd9355d65\" xmpMM:OriginalDocumentID=\"xmp.did:b43ee422-3b91-4c58-9cda-1badd9355d65\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:b43ee422-3b91-4c58-9cda-1badd9355d65\" stEvt:when=\"2022-02-10T13:54:20+01:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.1 (Macintosh)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>(\x13a\u0097\x00\x00\x00LIDATH\u0089\u00ED\u00D51\x0E\u00C00\b\x03@\x13\u00E5}\u00F0V\u00F8\u00A0\u00B3\u00A3v\u00C8\u0090!\u00AD\u00BD\u00E1\u0081\u0093X0\u00928\u009Dq\\\x10\u00B2\u009B\u00F9TV\x15#\u00C2\x00 3\t\x00}~\u00EB\u00DC\u00DD\u00FA\u00BE\u00EF\u009CK\u0088\x10!BnDL?\u00FE\u009F\u00C8\x02\u00C1X\x16-\x1BM\u0090\u00BE\x00\x00\x00\x00IEND\u00AEB`\u0082";
				scriptMng.files["/autoFadeOver.png"] = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x04\u00F4iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.eda2b3fac, 2021/11/17-17:23:19        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.1 (Macintosh)\" xmp:CreateDate=\"2022-02-10T13:54:20+01:00\" xmp:ModifyDate=\"2022-03-25T12:07:08+01:00\" xmp:MetadataDate=\"2022-03-25T12:07:08+01:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:5efde6e7-d2f7-45bb-ad49-232b70d55157\" xmpMM:DocumentID=\"xmp.did:5efde6e7-d2f7-45bb-ad49-232b70d55157\" xmpMM:OriginalDocumentID=\"xmp.did:5efde6e7-d2f7-45bb-ad49-232b70d55157\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:5efde6e7-d2f7-45bb-ad49-232b70d55157\" stEvt:when=\"2022-02-10T13:54:20+01:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.1 (Macintosh)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>q,\x02$\x00\x00\x00OIDATH\u0089c\u00FC\u00FF\u00FF?\x03\u00AD\x01\x13\u00CDm\x18\u00B5\u0084T\u00C0\u0082MP\u00AF\u00F7\u00CD\u00FF\u00CB%\u00A2\u008C\f\f\f\f\u00BA=\u00AF\u00FF3000\u00A0\u00F3q\u0089]*\x16aD7o\u00F8\x04\u00D7\u00A8%\u00A3\u0096\u008CZ2j\u00C9P\u00B4\u0084q\u00B4\u008E\x1F\u0099\u0096\x00\x00\u00B1\u00BC\x16-\u0095\u00A1\x1E\u00FC\x00\x00\x00\x00IEND\u00AEB`\u0082";
				scriptMng.files["/autoFadeIn.png"] = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x04\u00F4iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.eda2b3fac, 2021/11/17-17:23:19        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.1 (Macintosh)\" xmp:CreateDate=\"2022-02-10T13:54:20+01:00\" xmp:ModifyDate=\"2022-03-25T12:07:39+01:00\" xmp:MetadataDate=\"2022-03-25T12:07:39+01:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:2d5bd5e9-f341-4abe-b778-85558f735236\" xmpMM:DocumentID=\"xmp.did:2d5bd5e9-f341-4abe-b778-85558f735236\" xmpMM:OriginalDocumentID=\"xmp.did:2d5bd5e9-f341-4abe-b778-85558f735236\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:2d5bd5e9-f341-4abe-b778-85558f735236\" stEvt:when=\"2022-02-10T13:54:20+01:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.1 (Macintosh)\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00FF\u00C0\u00E0\u00B8\x00\x00\x00GIDATH\u0089c\u00FC\u00FF\u00FF?\x03\u00AD\x01\x13\u00CDm\x18\u00B5\u0084T\u00C0\u0082MP\u00EF\u00CD\u00D4\u00FF\f\f\f\u008CP.,e\u00A0\u00F3\u00B1\u008A]\x12\u00C9fd@\x03\u00C3'\u00B8F-\x19\u00B5d\u00D4\u0092QK\u0086\u00A2%\u008C\u00A3u\u00FC\u00C8\u00B4\x04\x00X\u00F1\r-~\u00BEH?\x00\x00\x00\x00IEND\u00AEB`\u0082";
				scriptMng.files["/autoFadeOut.png"] = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x06\u00A0iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.eda2b3fac, 2021/11/17-17:23:19        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmp:CreatorTool=\"Adobe Photoshop 23.1 (Macintosh)\" xmp:CreateDate=\"2022-02-10T13:54:20+01:00\" xmp:ModifyDate=\"2022-03-25T12:10:22+01:00\" xmp:MetadataDate=\"2022-03-25T12:10:22+01:00\" dc:format=\"image/png\" photoshop:ColorMode=\"3\" xmpMM:InstanceID=\"xmp.iid:a0d56f32-ee51-481d-b6a6-c354e77bdb6f\" xmpMM:DocumentID=\"adobe:docid:photoshop:42ac5e0a-72e0-9a47-a191-69edabc36d43\" xmpMM:OriginalDocumentID=\"xmp.did:2d5bd5e9-f341-4abe-b778-85558f735236\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:2d5bd5e9-f341-4abe-b778-85558f735236\" stEvt:when=\"2022-02-10T13:54:20+01:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.1 (Macintosh)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:bdc01219-8e7d-4472-aa09-c959b931d25d\" stEvt:when=\"2022-03-25T12:08:24+01:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.1 (Macintosh)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:a0d56f32-ee51-481d-b6a6-c354e77bdb6f\" stEvt:when=\"2022-03-25T12:10:22+01:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.1 (Macintosh)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u008A\u0096d\u00DE\x00\x00\x00GIDATH\u0089c\u00FC\u00FF\u00FF?\x03\u00AD\x01\x13\u00CDm\x18\u00B5\u0084T\u00C0\u0082M\u00F0\u0085\u0093\u00D5\x7F\x06\x06\x06F(\x17\u00962\u00D0\u00F9X\u00C5$\u00F6\x1Dcd@\x03\u00C3'\u00B8F-\x19\u00B5d\u00D4\u0092QK\u0086\u00A2%\u008C\u00A3u\u00FC\u00C8\u00B4\x04\x00G]\r-\u00A0\u00A3(\u00EA\x00\x00\x00\x00IEND\u00AEB`\u0082";
				scriptMng.files["/test1.png"] = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x19\x00\x00\x00\x19\b\x06\x00\x00\x00\u00C4\u00E9\u0085c\x00\x00\x00\x04sBIT\b\b\b\b|\bd\u0088\x00\x00\x01\u0091IDATHK\u00E5\u0095\u00CDN\u00C2@\x10\u00C7g\u00B0}\x00\x13\u00E9\x15L4\u00F1\x00\to`y\x12\u00E1\x11\u008Cp\u0086\u00BB%\u00F8\x06\u00EA\u0093\u00C0#@\u00E0\u00A8\u0091\u00B35\u00D1\u00C4\x1Ek\u00C7\u009D]\u0096\u00D6f)[C\u00B8\u00B0\x17\u00B6lg~\u00FB\u009F\u00AF\"\x1C`\u00E1\x01\x18p\u00E4\u0090\u00AB\u00F1g\u00DD\u00A5\u00B8f\n\u00F57:\u00F3\u00D5\u00ED\u00E9W\u00F6lk\u00B8\u009A\u00A3\u008F\x0EPr\u00BD\u00E8y]6h\x06\u00EFO\u00E2\u0087\u00F8\u00B9q\x1F\x0E\x11a`\u0082\x10\u00D1,r\u00DCv\x16\u00B4\x1D\"\u009D\u00E2\u008D\u00F0\u00CB\u00CE\u00C5{r\u00FF, \x1DV\u00E2\u00FC\u00C4o@\u00D0\u0096 \u0084\t\u00EF\t\u00A0UA\x18\u0093\u00D8/\u00FB\u00D5\u00A9\u00BEDa\u00E2\u00D5\u00ED\u00D99/\x05\u00D0\u0086\u00CD \x14\u00AA\u00AA\u00D2^\u00EF\u0085B_(\u009C\u0094\u0086\u0090R\u00F0\u00BA\u00ECy\x17\x1A\u00D0\x18\u0085\x03$\x18\u00E6\u00C3%\u0094\u00C8r\u00B5\u0086\u00A4*\u0094\u0082|\u008EL\u00F9(\u00A5$\x0FH\x13\u00AFr\u00A4\u008B!\x0F\u00B2\u0086\u0098\x00i\x1E\u00D2b0\u0081\u00AC *$\u00F4(n\u00BB\x12N\u00CE\u008D!\t\u00C2\u0095\u0088{\r\x10\u00BB\u008B\u00BB3\u00AE\u00BC\u00CD\u00B2\u0082\u00EC\nK\u0091J\u00B6\u00B5\u0086l\x03\u00ED\x02\u0094\u0086\u0098@\u00EB\u00EA\u00F2\u00B3\u00BD\u00F2\u00EF\u00C4g\r\u00F9\u00F6\u00B2O\u0088^\u0096}\u00EFr\u00EF}\u0092U\u00A3\u009A\u00ECo\u00E9\u00EE\u00A5\u00E3\u00B39P\n\u00D2\x1E\u00D1\u00B3\x0B+\u00E0\u00F3\t%0\u00E5=%\u00D4B\u00C0\x07\u00FB\u008EWSx\u0093\u0083\u00F5\x14\x06\u00CEI\u00E1\x14\x06\u009AG'\u00AEo5\u0085M=\u00A2\u00FF\u0093J\u00E2\u00B8nz'r\u009C\u0099\u00F5\u00F7\u00A4\bR\u00F6\u00EC\u00C8\u00BF\u00F1e\u00C3\u00F5\x0B\x18\u008B8)\u00DD\x7F\u00EA\u00E1\x00\x00\x00\x00IEND\u00AEB`\u0082";
			
                var myFolder = new Folder(Folder.userData.fsName + "/Laurent");
				if (myFolder.exists)myFolder.create();
				var imgFolder = new Folder(myFolder.fsName + "/Test").fsName;

				for (var k in scriptMng.files)
				{
					if (scriptMng.files.hasOwnProperty(k))
					{
						if (!checkFile(imgFolder + k, scriptMng.files[k]))
						{
							alert("Error writing file: " + k);
						}
					}
				}

		}

		imgFolder = Folder.userData.absoluteURI + "/Laurent/Test/";


		//========== FUNCTIONS ============

        // Alert Comp et layer Active ?
        // Effacer les Keyframes déjà présents 

        function alertClick() {
            alert("Click")
        }

        function alertShiftClick() {
            alert("Shift+Click")
        }

        function alertAltClick() {
            alert("Alt+Click")
        }

        function alertCtrlClick() {
            alert("Ctrl+Click")
        }

        function alertCtrlShiftClick() {
            alert("Ctrl+Shift+Click")
        }

        function alertCtrlAltClick() {
            alert("Ctrl+Alt+Click")
        }

        function alertShiftAltClick() {
            alert("Shift+Alt+Click")
        }

		function alertMetaClick() {
            alert("Pomme+Click")
        }

        // autoFade Ctrl > add null controller with Control

		//=========== UI ACTIONS ==========

		//======== ATTRIBUTES ACTIONS =========

		//========= PANEL SELECTOR ============

		//=========== UI ===========
		{

			function addImageButton(container, text, image, helpTip, imageOver, imageShift, imageAlt, imageCtrlShift)
			{
				if (!container) return null;
				if (!text) text = '';
				if (!image) image = '';
				if (!helpTip) helpTip = '';
				if (!imageOver) imageOver = '';
                if (!imageAlt) imageAlt = '';
                if (!imageShift) imageShift = '';
                if (!imageCtrlShift) imageCtrlShift = '';

				if (text == '' && image == '') return null;

				var imageButton = {};

				imageButton.standardImage = image;
				imageButton.imageOver = imageOver;
                imageButton.imageAlt = imageAlt;
                imageButton.imageShift = imageShift;
                imageButton.imageCtrlShift = imageCtrlShift;
				imageButton.onClick = function () {};
                imageButton.onShiftClick = function () {};
                imageButton.onCtrlShiftClick = function() {};
                imageButton.onAltClick = function () {};
                imageButton.onCtrlAltClick = function() {};
                imageButton.onCtrlClick = function() {};
                imageButton.onShiftAltClick = function() {};

				var group = container.add('group');
				group.orientation = 'row';
				group.margins = 0;
				group.spacing = 20;
				group.alignment = ['fill','fill'];
				imageButton.group = group;


				if (text != '')
				{
					var label = group.add('statictext',undefined,text);
					label.helpTip = helpTip;
					label.alignment = ['center','center'];
					imageButton.label = label;
				}

				if (image != '')
				{
					var icon = group.add('image',undefined,image);
					icon.alignment = ['center','center'];
					icon.helpTip = helpTip;
					imageButton.image = icon;
					//icon.preferredSize.width = 50; 
					//icon.preferredSize.height = 50; 
				}
                
				function clicked(e)
				{
					if ( e.shiftKey && !e.altKey && !e.ctrlKey ) imageButton.onShiftClick();
                    else if ( e.shiftKey && !e.altKey && e.ctrlKey ) imageButton.onCtrlShiftClick();
                    else if ( !e.shiftKey && e.altKey && !e.ctrlKey ) imageButton.onAltClick();
                    else if ( !e.shiftKey && e.altKey && e.ctrlKey ) imageButton.onCtrlAltClick();
                    else if ( !e.shiftKey && !e.altKey && e.ctrlKey ) imageButton.onCtrlClick();
                    else if ( e.shiftKey && e.altKey && !e.ctrlKey ) imageButton.onShiftAltClick();
					else if ( e.metaKey ) imageButton.onMetaClick();
                    else imageButton.onClick();
				}
                
				function mouseOver(e)
				{
					if (aeVersion >= 11 && aeVersion < 12) return; //Bugs on CS6
					if (icon) if (imageButton.imageOver != '') 
                        if ( e.shiftKey && !e.altKey && !e.ctrlKey ) icon.image = imageButton.imageShift;
                        else if ( e.shiftKey && !e.altKey && e.ctrlKey ) icon.image = imageButton.imageCtrlShift;
                        else if ( !e.shiftKey && e.altKey && !e.ctrlKey ) icon.image = imageButton.imageAlt;
                        else if ( !e.shiftKey && e.altKey && e.ctrlKey )  icon.image = imageButton.imageAlt;
                        //else if ( e.ctrlKey )  icon.image = imageButton.imageCtrl;
						//else if ( e.metaKey )  icon.image = imageButton.imagePref;
                        else icon.image = imageButton.imageOver;
				}

                function mouseUp(e)
				{
					if (aeVersion >= 11 && aeVersion < 12) return; //Bugs on CS6
					if (icon) if (imageButton.imageOver != '') icon.image = imageButton.imageOver;
				}

				function mouseOut(e)
				{
					if (aeVersion >= 11 && aeVersion < 12) return; //Bugs on CS6
					if (icon) if (imageButton.standardImage != '') icon.image = imageButton.standardImage;
				}

				group.addEventListener("mousedown", clicked,true);
				group.addEventListener("mousemove", mouseOver);
				group.addEventListener("mouseout", mouseOut);
                group.addEventListener("mouseup", mouseUp);

				return imageButton;
			}


			var  myPal = null;
			thisObj instanceof Panel ? myPal = thisObj : myPal = new Window('palette',"myTest",undefined, {resizeable:true});

			if (myPal == null) return null;

			// Paramètres de marges et alignements du contenu
			myPal.alignChildren = ['fill','fill'];
			myPal.margins = 5;
			myPal.spacing = 20;

			var myGroup = myPal.add('group');
			myGroup.alignment = ['left','top'];
			myGroup.alignChildren = ['left','fill'];
			myGroup.margins = 10;
			myGroup.spacing = 10;

			var alertButton = addImageButton(myGroup, '', imgFolder + 'autoFade.png', '', imgFolder + 'autoFadeOver.png', imgFolder + 'autoFadeIn.png', imgFolder + 'autoFadeOut.png', imgFolder + 'test1.png');
			alertButton.maximumSize = [35,35];
            alertButton.onClick = alertClick;
            alertButton.onShiftClick = alertShiftClick;
            alertButton.onAltClick = alertAltClick;
            alertButton.onCtrlClick = alertCtrlClick;
            alertButton.onCtrlShiftClick = alertCtrlShiftClick;
            alertButton.onCtrlAltClick = alertCtrlAltClick;
            alertButton.onShiftAltClick = alertShiftAltClick;
			alertButton.onMetaClick = alertMetaClick;

			// On définit le layout et on redessine la fenètre quand elle est resizée
			myPal.layout.layout(true);
			myPal.layout.resize();
			myPal.onResizing = myPal.onResize = function () {this.layout.resize();}
		}


		return myPal;
	} //FONCTION myTestUI



	// On execute la creation de l'UI
	var myPalette = myTestUI(obj);
	// Si c'est une fenetre (pas lance depuis ScriptUI Panels) il faut l'afficher
	if (myPalette != null && myPalette instanceof Window) {
	//myPalette.center();
	myPalette.show();
	}

})(this);
