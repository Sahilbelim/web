// TradingViewWidget.jsx

import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget(props) {

  var url = new URL(window.location.href);
  var CurrentPage = url.href;
 var Symbol = CurrentPage.substring(CurrentPage.lastIndexOf("/") + 1);

  console.log(Symbol);

  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_5b20d") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          width: props.width,
          height: props.height,
          // autosize: true,
          symbol: Symbol,
          interval: "1",
          timezone: "Asia/Kolkata",
          theme: "light",
          style: "1",
          locale: "in",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_5b20d",
        });
      }
    }
  }, []);

  return (
    <div className="cord " >
      <div
        className="tradingview-widget-container card-body"
        style={{ height: "100%", width: "100%" }}
      >
        <div
          id="tradingview_5b20d"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        />
      </div>
    </div>
  );
}
