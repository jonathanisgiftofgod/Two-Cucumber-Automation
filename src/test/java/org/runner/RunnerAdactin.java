package org.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Britto\\eclipse-workspace\\CucumberAutomation\\src\\test\\resources\\LoginFeatureValidation.feature",
glue= "org.FinalPackage", plugin = {"pretty", "html:target\\cucu.html","json:target\\cucu.json", "junit:target\\cucu.junit"})
public class RunnerAdactin {
	public static void report() {
		String path = (System.getProperty("user.dir"));
		Reporting.jvmReport(path+"\\target\\cucu.json");
	}
}
