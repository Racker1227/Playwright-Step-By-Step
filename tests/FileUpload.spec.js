import { test, expect } from "@playwright/test";

test.skip("SingleFile Upload", async ({ page }) => {
  //url
  await page.goto("file:///C:/Users/rushi/Downloads/FileUpload1.html");

  //dialog box handler - for alert box
  page.on("dialog", async (dialog) => {
    //print the alert message in console
    console.log("dialog message is: ", dialog.message());

    //verify the alert message contains word "uploaded"
    expect(dialog.message()).toContain("uploaded");

    //click on ok button
    await dialog.accept();
  });

  //upload the file
  await page
    .locator("#fileUpload")
    .setInputFiles("tests/UploadFiles/Resume_Rushikesh_Wadme.pdf");

  //click on upload button
  await page.locator("//button[text()='Upload File']").click();

  //await for 2 seconds
  await page.waitForTimeout(2000);
});

test.skip("Multiple File Upload", async ({ page }) => {
  //url
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  //input multiple files
  await page
    .locator("#filesToUpload")
    .setInputFiles([
      "tests/UploadFiles/Resume_Rushikesh_Wadme.pdf",
      "tests/UploadFiles/KeyboardAction.html",
    ]);

  //verfify uploadedd file
  const files = page.locator("#fileList li");

  await expect(files.nth(0)).toHaveText("Resume_Rushikesh_Wadme.pdf");
  await expect(files.nth(1)).toHaveText("KeyboardAction.html");

  await page.waitForTimeout(3000);

  // remove uploaded files
  await page.locator("#filesToUpload").setInputFiles([]);

  //verify files are removed
  await expect(page.locator("#fileList")).toHaveText("No Files Selected");

  //pause for demo
  await page.waitForTimeout(3000);

});


test("Drag and Drop file Upload", async ({page}) => {

    //url
    await page.goto("file:///C:/Users/rushi/Downloads/DragAndDropFileUpload.html");

    //upload file
    await page.locator("#fileInput").setInputFiles("tests/UploadFiles/Resume_Rushikesh_Wadme.pdf");

    //verify file name shown
    await expect(page.getByText("Resume_Rushikesh_Wadme.pdf")).toBeVisible();

    await page.waitForTimeout(2000);
})