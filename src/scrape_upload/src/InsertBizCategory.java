/*
 * Copyright (c) 2015 Nutanix Inc. All rights reserved.
 *
 * Author: vineel@nutanix.com
 */

import com.opencsv.CSVReader;

import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * Created by vineel on 1/24/16.
 */
public class InsertBizCategory {

  public static void main(String a[]) {
    //Read from csv

    readFromCsv("/Users/vineel/myworkspace/scrape_upload" +
        "/drilldown_page_Plumber_SanJose.csv");

    // Upload to postgres
    //uploadToPostgres();
  }


  public static void uploadToPostgres() {

    try {
      Class.forName("org.postgresql.Driver");
      Connection connection = null;
      connection = DriverManager.getConnection(
          "jdbc:postgresql://107.3.142.112:5432/insbdev", "insbdev",
          "insbdev");
      if (connection != null) {
        System.out.print("Hurray");
      }
    } catch (Exception e) {
      e.printStackTrace();
    }

  }

  public static void readFromCsv(String fileName) {

    Map<Integer, String> IdToCategoryMap = new HashMap<>();
    IdToCategoryMap.put(1, "Solar Installation");
    IdToCategoryMap.put(2, "Damage Restoration");
    IdToCategoryMap.put(3, "Septic Services");
    IdToCategoryMap.put(4, "Drywall Installation & Repair");
    IdToCategoryMap.put(5, "Heating & Air Conditioning/HVAC");
    IdToCategoryMap.put(6, "Utilities");
    IdToCategoryMap.put(7, "Flooring");
    IdToCategoryMap.put(8, "Property Management");
    IdToCategoryMap.put(9, "Hardware Stores");
    IdToCategoryMap.put(10, "Roofing");
    IdToCategoryMap.put(11, "Pool Cleaners");
    IdToCategoryMap.put(12, "Building Supplies");
    IdToCategoryMap.put(13, "Plumbing");
    IdToCategoryMap.put(14, "Gutter Services");
    IdToCategoryMap.put(15, "Appliances & Repair");
    IdToCategoryMap.put(16, "Painters");
    IdToCategoryMap.put(17, "Carpet Cleaning");
    IdToCategoryMap.put(18, "Landscaping");
    IdToCategoryMap.put(19, "Contractors");
    IdToCategoryMap.put(20, "Water Purification Services");
    IdToCategoryMap.put(21, "Drugstores");
    IdToCategoryMap.put(22, "Kitchen & Bath");
    IdToCategoryMap.put(23, "Handyman");
    IdToCategoryMap.put(24, "Water Heater Installation/Repair");
    IdToCategoryMap.put(25, "Apartments");
    IdToCategoryMap.put(26, "Fireplace Services");
    IdToCategoryMap.put(27, "Appliances");
    IdToCategoryMap.put(28, "Insurance");
    IdToCategoryMap.put(29, "Home Decor");
    IdToCategoryMap.put(30, "Electricians");
    IdToCategoryMap.put(31, "Cabinetry");
    IdToCategoryMap.put(32, "Garage Door Services");
    IdToCategoryMap.put(33, "Pool & Hot Tub Service");
    IdToCategoryMap.put(34, "Interior Design");

    Map<String, Integer> categoryToIdMap = new HashMap<>();
    for (int id : IdToCategoryMap.keySet()) {
      categoryToIdMap.put(IdToCategoryMap.get(id), id);
    }

    Set<String> categorySet = new HashSet<>();
    try {
      CSVReader reader = new CSVReader(new FileReader(fileName));
      String[] nextLine;
      // Skip the first line.
      nextLine = reader.readNext();
      int lineNumber = 0;

      while ((nextLine = reader.readNext()) != null) {
        lineNumber++;
        String bizName = nextLine[0].trim();

        float bizRating = -1;
        if (!nextLine[1].trim().isEmpty()) {
          bizRating = Float.valueOf(nextLine[1].trim());
        }

        int bizReviewCount = -1;
        if (!nextLine[1].trim().isEmpty()) {
          bizRating = Integer.valueOf(nextLine[2].trim());
        }

        String bizCategory[] = nextLine[3].trim().split(",");
        String bizAddress = nextLine[4].trim();
        String bizNeighbor = nextLine[5].trim();
        String bizPhone = nextLine[6].trim();
        String bizUrl = nextLine[7].trim();

        for (String category : bizCategory) {
          categorySet.add(category);
        }

//        System.out.println(
//            "INSERT INTO biz (id, name, rating, review_count, address, " +
//                "neighbor, phone, url) " +
//                "VALUES (" +
//                lineNumber + ", '" +
//                bizName + "', " +
//                bizRating + ", " +
//                bizReviewCount + ", '" +
//                bizAddress + "', '" +
//                bizNeighbor + "', '" +
//                bizPhone + "', '" +
//                bizUrl + "');");

        /*for (final String category : bizCategory) {
          System.out.println(
              "INSERT INTO biz_to_biz_categories (biz_id, category_id) " +
                  "VALUES (" + lineNumber + ", "
                  + categoryToIdMap.get(category) + "); ");

        }*/

      }
    }
    catch(Exception e){
      e.printStackTrace();
    }
    int id = 0;
    for (String category : categorySet) {
      id ++;
//      System.out.println(
//                "INSERT INTO biz_category (id, name) " +
//                    "VALUES (" + id + ", '"
//                    + category + "'); ");
    }
  }

}
