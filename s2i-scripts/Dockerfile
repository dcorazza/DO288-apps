FROM registry.access.redhat.com/rhscl/httpd-24-rhel7

USER root
RUN mkdir -p /tmp/src
COPY ./.s2i/bin /usr/libexec/s2i
COPY index.html /tmp/src
RUN chown -R 1001:0 /usr/libexec/s2i /tmp/src \
  && chmod -R +x /usr/libexec/s2i	 
USER 1001
EXPOSE 8080
RUN /usr/libexec/s2i/assemble
CMD /usr/libexec/s2i/run

