{{flutter_js}}
{{flutter_build_config}}

window.addEventListener('load', function() {
  _flutter.loader.loadEntrypoint({
    serviceWorker: {
      serviceWorkerVersion: {{flutter_service_worker_version}},
    }
  });
});
