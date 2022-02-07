// THIS FILE WAS AUTOGENERATED
import Domain = require("./Domain");
import DataPoint = require("./DataPoint");
"use strict";
    
    /**
     * An instance of the Metric item is a list of measurements (single data points) and/or aggregations.
     */
    class MetricData extends Domain
    {
        
        /**
         * Schema version
         */
        public ver: number;
        
        /**
         * List of metrics. Only one metric in the list is currently supported by Application Insights storage. If multiple data points were sent only the first one will be used.
         */
        public metrics: DataPoint[];
        
        /**
         * Collection of custom properties.
         */
        public properties: any;
        
        constructor()
        {
            super();
            
            this.ver = 2;
            this.metrics = [];
            this.properties = {};
        }
    }
export = MetricData;
