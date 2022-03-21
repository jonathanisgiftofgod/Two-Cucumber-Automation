package org.runner;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Reporting {
	public static void jvmReport(String JsonFIle) {
		File  reportDir = new File("C:\\Users\\Britto\\eclipse-workspace\\CucumberAutomation\\target\\Report");
		Configuration configuration = new Configuration(reportDir, "CucumberAutomation");
		configuration.addClassifications("Browser", "chrome");
		configuration.addClassifications("version", "95.465.64");
		configuration.addClassifications("Tester", "Joseph");
		List<String> JsonFile = new ArrayList<String>();
		JsonFile.add(JsonFIle);
		ReportBuilder builder = new ReportBuilder(JsonFile, configuration);
		builder.generateReports();
	}
}
